
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCR1WPUCU30hyBKleMW8XHABREufAiQf1Q",
  authDomain: "notesapp-73992.firebaseapp.com",
  projectId: "notesapp-73992",
  storageBucket: "notesapp-73992.appspot.com",
  messagingSenderId: "249671985759",
  appId: "1:249671985759:web:d230b0057f84c41f63c9ea"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export  const notesCollection = collection(db, "notes");
