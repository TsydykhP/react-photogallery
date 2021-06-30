import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCnc4tfvCI4UUZnxYzUQpOw3Y_VFHJAa7A",
  authDomain: "ts---react-photogallery.firebaseapp.com",
  projectId: "ts---react-photogallery",
  storageBucket: "ts---react-photogallery.appspot.com",
  messagingSenderId: "977879848061",
  appId: "1:977879848061:web:63f996056b430e148fcd14"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };