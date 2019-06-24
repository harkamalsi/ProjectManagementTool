import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";
import DeleteProject from "./DeleteProject";
import { deleteProject } from "../../store/actions/projectActions";

class ProjectDetails extends React.Component {
  state = {
    loaderCheck: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaderCheck: false });
    }, 5000);
  }

  onDelete = id => {
    let propsProject = { ...this.props.project, id };

    this.props.deleteProject(propsProject);
    //this.props.history.push("/");
  };

  displayNotAvailable = () => {
    return (
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "25vh"
        }}
      >
        No such project is available.
      </h3>
    );
  };

  loader = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{ top: "25vh" }} className="preloader-wrapper big active">
          <div className="spinner-layer spinner-red-only lighten-1">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  handleNameCheck = () => {
    this.setState({ nameCheck: !this.state.nameCheck });
  };

  render() {
    const { project, auth } = this.props;
    const projectId = this.props.match.params.id;

    if (!auth.uid) return <Redirect to="/signin" />;

    if (project) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content light-blue lighten-5">
              <span className="card-title">{project.title}</span>
              <p>{project.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>
                Posted by {project.authorFirstName} {project.authorLastName}{" "}
                {project.authorId === auth.uid && "(you)"}
              </div>
              <div>{moment(project.createdAt.toDate()).calendar()}</div>
              <DeleteProject
                project={project}
                projectId={projectId}
                uid={auth.uid}
                onDelete={this.onDelete}
              />
            </div>
          </div>
          <div className="input-field">
            <Link to="/">
              <button
                style={{ marginTop: "5rem" }}
                className="btn pink waves-effect waves-light lighten-1 z-depth-0"
              >
                Home
              </button>
            </Link>
          </div>
        </div>
      );
    } else {
      if (this.state.loaderCheck) {
        return this.loader();
      } else {
        return this.displayNotAvailable();
      }
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //dispatch an action (peker videre til projectActions)
    deleteProject: project => dispatch(deleteProject(project))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
