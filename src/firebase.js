import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCRjnCiMQMxqKEjPdOTl84To5cmvkYyU_U",
  authDomain: "linkdin-clone-app-4691b.firebaseapp.com",
  projectId: "linkdin-clone-app-4691b",
  storageBucket: "linkdin-clone-app-4691b.appspot.com",
  messagingSenderId: "196112731732",
  appId: "1:196112731732:web:bf69c542de961f119fe7c1",
  measurementId: "G-XS1MT81MTH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
