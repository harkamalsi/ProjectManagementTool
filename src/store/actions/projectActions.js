export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    //getState() returns the state object
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};

export const deleteProject = project => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const id = project.id;

    const docRef = firestore.collection("projects").doc(id);

    // if (docRef.get()) {
    //   console.log("It is to be found");
    // } else {
    //   console.log("It is NOT to be found");
    // }

    docRef
      .delete()
      .then(() => dispatch({ type: "DELETE_PROJECT", project }))
      .catch(err => {
        dispatch({ type: "DELETE_PROJECT_ERROR", err });
      });
  };
};
