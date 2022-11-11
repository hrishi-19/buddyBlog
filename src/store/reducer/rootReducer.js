import authReducer from "./authreducer";
import projectReducer from "./projectreducer";
import { combineReducers } from "redux";
import { FirebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer =  combineReducers({
    auth: authReducer,
    project: projectReducer,
    firebase: FirebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer