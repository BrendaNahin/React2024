import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBeG20OfVWUZR_6EDcVKON_K6XeU6MBiDE",
    authDomain: "proyecto-react-3a551.firebaseapp.com",
    projectId: "proyecto-react-3a551",
    storageBucket: "proyecto-react-3a551.appspot.com",
    messagingSenderId: "450825696982",
    appId: "1:450825696982:web:57043169ecc278cf90bb77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);