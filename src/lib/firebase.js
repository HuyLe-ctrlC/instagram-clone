import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//here i want to import the seed file
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDK1osjIJqn9Oa20k2LohBnFhkR8CCaKe0",
  authDomain: "instagram-huylm.firebaseapp.com",
  projectId: "instagram-huylm",
  storageBucket: "instagram-huylm.appspot.com",
  messagingSenderId: "268925470752",
  appId: "1:268925470752:web:257c646b7f69d29e081445",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//here is where I want to call the seed file (only ONCE)
// seedDatabase(firebase)

export { firebase, FieldValue };
