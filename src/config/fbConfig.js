
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAx_uAEXhMdW28bf0eQF-GCjNM_Lj7Q6U",
  authDomain: "buddyplan-2aee8.firebaseapp.com",
  projectId: "buddyplan-2aee8",
  storageBucket: "buddyplan-2aee8.appspot.com",
  messagingSenderId: "73387529220",
  appId: "1:73387529220:web:2ac620ebff4a526ecc5151",
  measurementId: "G-VQ8EDWB7S4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({timestampsInSnapshots:true});
export default firebase;