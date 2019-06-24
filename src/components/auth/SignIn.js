import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    loadingBarProgress: 0,
    counter: 0
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    //creds = credentials (email and password)
    const creds = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.signIn(creds);
  };

  onLoaderFinished = () => {
    this.setState({ loadingBarProgress: 0 })
  }

  add = value => {
    this.setState({
      loadingBarProgress: this.state.loadingBarProgress + value
    });
  };

  //Haven't been able to figur out how to get the status-response from firebase for auth, hence the hardcoded progress.
  smoothProgress = () => {
    this.add(100);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="" />;

    return (
      <div className="container">
        <LoadingBar
          progress={this.state.loadingBarProgress}
          height={3}
          color="#ec407a"
          onLoaderFinished={() => this.onLoaderFinished()}
        />

        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign in</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button onClick={() => {this.smoothProgress()}} className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //signIn is the authActions component/action creator
    signIn: creds => dispatch(signIn(creds))
  };
};

//null is for mapStoreToProps
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
