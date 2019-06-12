import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create new project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onchange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onchange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // createProject makes the async call to database
    createProject: (project) => dispatch(createProject(project))
  }
}

//first parameter of connect is the state but since we dont have any state to send here, we send a null. 
export default connect(null, mapDispatchToProps)(CreateProject);
