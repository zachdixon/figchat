const { firestore } = require("firebase-admin");
const functions = require("firebase-functions");

const db = firestore();

exports.createUserOnAuthCreate = functions.auth
  .user()
  .onCreate(async (user) => {
    const userDoc = db.doc(`users/${user.uid}`);
    await userDoc.set({
      displayName: user.displayName,
      photoUrl: user.photoURL,
    });
  });
