import * as admin from "firebase-admin";
import { UserRecord } from "firebase-admin/auth";
import { getExtensions } from "firebase-admin/extensions";
import { getFunctions } from "firebase-admin/functions";
import * as functions from "firebase-functions";

import config from "./config";

admin.initializeApp();

const auth = admin.auth();
const db = admin.firestore();

const usersCollection = db.collection(config.usersCollectionPath);

const getUserDocumentData = (user: UserRecord) => {
  const doc: any = {};

  for (const field of config.fieldsToPopulate) {
    const fieldValue = user[field as keyof UserRecord];
    if (fieldValue) {
      doc[field] = fieldValue;
    }
  }

  return doc;
};

export const createUserDocument = functions.auth
  .user()
  .onCreate(async (user) => {
    const userDocumentRef = usersCollection.doc(user.uid);

    const data = getUserDocumentData(user);

    return userDocumentRef.set(data);
  });

export const deleteUserDocument = functions.auth
  .user()
  .onDelete(async (user) => {
    if (!config.deleteDocumentOnUserDelete) {
      return;
    }
    return usersCollection.doc(user.uid).delete();
  });

const BATCH_SIZE = 100;

export const backfillExistingUsers = functions.tasks
  .taskQueue()
  .onDispatch(async (data) => {
    const runtime = getExtensions().runtime();

    if (!config.backfillExistingUsers) {
      return runtime.setProcessingState(
        "PROCESSING_COMPLETE",
        "Documents for existing users weren't created because the parameter " +
          '"Backfill existing users" was set to  "No". If you want to create ' +
          "documents for existing users, reconfigure this instance."
      );
    }

    if (data.pageToken) {
      console.log(
        "Continue backfilling existing users process. Processing batch " +
          `starting at page token: ${data.pageToken}`
      );
    } else {
      console.log(
        "Starting the backfill process. Checking for existing users to " +
          "create documents for."
      );
    }

    try {
      const { users, pageToken } = await auth.listUsers(
        BATCH_SIZE,
        data.pageToken
      );

      const batch = db.batch();

      for (const user of users) {
        const userDocumentRef = usersCollection.doc(user.uid);
        const data = getUserDocumentData(user);
        batch.set(userDocumentRef, data, { merge: true });
      }

      await batch.commit();

      const createdDocumentsCount =
        (Number(data.createdDocumentsCount) || 0) + users.length;

      if (pageToken) {
        const queue = getFunctions().taskQueue(
          `locations/${config.location}/functions/backfillExistingUsers`,
          process.env.EXT_INSTANCE_ID
        );
        await queue.enqueue({
          pageToken,
          createdDocumentsCount,
        });
      } else {
        console.log(
          `The backfill process is complete. Created ${createdDocumentsCount} ` +
            "documents for existing users."
        );
        return runtime.setProcessingState(
          "PROCESSING_COMPLETE",
          `Created ${createdDocumentsCount} documents for existing users.`
        );
      }
    } catch (e) {
      console.error("Error while backfilling existing users", e);
      return runtime.setProcessingState(
        "PROCESSING_FAILED",
        "Error while backfilling existing users"
      );
    }
  });
