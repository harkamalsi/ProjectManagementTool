const functions = require("firebase-functions");
const admin = require("firebase-admin");
//Just to initialize
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase! This is just a test.");
});

//this function is made for resuablity purpose
const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => console.log("Notification added", doc));
};

//this is a function (projectCreated). The trigger is a new document being added to the projects collection.
exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate(doc => {
    //new notification which will notify a user that a new project was added
    const project = doc.data();
    const notification = {
      content: "Added a new project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotification(notification);
  });

exports.userJoined = functions.auth.user().onCreate(user => {
  //here we are finding info of the relavant user (the user which was created)
  return admin
    .firestore()  
    .collection("users")
    .doc(user.uid)
    .get()
    .then(doc => {
      const newUser = doc.data();
      const notification = {
        content: "Joined the channel",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      };

      return createNotification(notification);
    });
});
