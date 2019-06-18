import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";


//this is a functional component so this.props wont work but props willl work
const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

//mapDispatchToProps so we can dispatch signOut actioncreator
const mapDispatchToProps = (dispatch) => {
  return {
    //first signOut is the fuction and the second one is the actionCreator
    signOut: () => dispatch(signOut())
  }
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
