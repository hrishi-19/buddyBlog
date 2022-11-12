import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducer/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import firebase from './config/fbConfig'


import 'firebase/firestore';

const rrfConfig = { 
    userProfile: 'projects',
    useFirestoreForProfile: true
}

const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebase,{useFirestoreForProfile:true,userProfile:'user'})
    )
    );

const rffProps = {
    firebase,
    useFirestoreForProfile: true,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...rffProps}>
            <App />  
        </ReactReduxFirebaseProvider>
        </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();