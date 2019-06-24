import React from "react";
import Modal from "../ui/Modal";

const DeleteProject = props => {
  if (props.project && props.project.authorId === props.uid) {
    return (
      <div style={{ position: "absolute", right: "40px", bottom: "10px"}}>
        <Modal onDelete={props.onDelete} projectId={props.projectId} />
      </div>
    );
  } else {
    return null;
  }
};

export default DeleteProject;
