import React from "react";
import "font-awesome/css/font-awesome.min.css";

const DeleteProject = props => {
  if (props.project && props.project.authorId === props.uid) {
    return (
      <div onClick={() => props.onDelete(props.projectId)}>
        <i className="black-text fa fa-trash" style={{ fontSize: "35px" }} />
      </div>
    );
  } else {
    return null;
  }
};

export default DeleteProject;
