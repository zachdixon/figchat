const admin = require("firebase-admin");

admin.initializeApp();
admin.firestore().settings({
  ignoreUndefinedProperties: true,
});

exports.users = require("./src/users");
