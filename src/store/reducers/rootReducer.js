import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducer } from "redux";

const rootReducer = combineReducer({
  auth: authReducer,
  project: projectReducer
});

export default rootReducer;
