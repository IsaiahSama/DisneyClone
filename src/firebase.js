import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9UzXI50q63FtqNshWT66gap4iKJAoWeQ",
  authDomain: "disney-clone-102a9.firebaseapp.com",
  projectId: "disney-clone-102a9",
  storageBucket: "disney-clone-102a9.appspot.com",
  messagingSenderId: "835987364354",
  appId: "1:835987364354:web:a6391d27febc1eedc7a51b",
  measurementId: "G-1RTP52LGRQ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };
export default db;
