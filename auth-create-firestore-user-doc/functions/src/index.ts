import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import config from './config';

admin.initializeApp();

const db = admin.firestore();

const usersCollection = db.collection(config.usersCollectionPath);

export const createUserDocument = functions.auth
  .user()
  .onCreate(async (user) => {
    usersCollection.doc(user.uid).set({
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      disabled: user.disabled,
      lastSignInTime: user.metadata.lastSignInTime,
      creationTime: user.metadata.creationTime,
    });
  });
