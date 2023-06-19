import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZVg3RKzljcYMvsCNtF5YgDZYbzPgm7iQ",
  authDomain: "rettiwt-9a016.firebaseapp.com",
  projectId: "rettiwt-9a016",
  storageBucket: "rettiwt-9a016.appspot.com",
  messagingSenderId: "242575733792",
  appId: "1:242575733792:web:2afe38cc355aaa7d2ef845",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
