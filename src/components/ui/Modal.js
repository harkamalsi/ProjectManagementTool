import React from "react";
import "font-awesome/css/font-awesome.min.css";
import M from "materialize-css";

class Modal extends React.Component {
  componentDidMount = () => {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "20%"
    };
    M.Modal.init(this.Modal, options);
  };

  render() {
    // <a data-target="modal1">
    //   <i className="black-text fa fa-trash" style={{ fontSize: "35px" }} />
    // </a>;
    return (
      <div style={{ maxWidth: "28px", float: "right" }}>
        <a data-target="modal1" className="modal-trigger">
          <i
            className="black-text fa fa-trash"
            style={{ fontSize: "55px", maxWidth: "40px" }}
          />
        </a>
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <div className="modal-content black-text">
            <h4>Are you sure?</h4>
            <p>You won't be able to revert this!</p>
          </div>
          <div className="modal-footer">
            <button
              style={{ marginRight: "10px" }}
              className="modal-close blue btn"
              onClick={() => this.props.onDelete(this.props.projectId)}
            >
              Yes, delete it!
            </button>
            <a className="modal-close red btn">Cancel</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
