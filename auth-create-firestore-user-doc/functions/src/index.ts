import * as admin from 'firebase-admin';
import { UserRecord } from 'firebase-admin/auth';
import * as functions from 'firebase-functions';
import config from './config';

admin.initializeApp();

const db = admin.firestore();

const usersCollection = db.collection(config.usersCollectionPath);

export const createUserDocument = functions.auth
  .user()
  .onCreate(async (user) => {
    const doc: any = {};
    for (const field of config.fieldsToPopulate) {
      const fieldValue = user[field as keyof UserRecord];
      if (fieldValue) {
        doc[field] = fieldValue;
      }
    }
    return usersCollection.doc(user.uid).set(doc);
  });
