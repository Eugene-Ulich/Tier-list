// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdrT2Hf2mT5aShs8Y1tVBy6p8iqMpWgtw",
  authDomain: "tier-list-70ad0.firebaseapp.com",
  databaseURL:
    "https://tier-list-70ad0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tier-list-70ad0",
  storageBucket: "gs://tier-list-70ad0.appspot.com",
  messagingSenderId: "292688470201",
  appId: "1:292688470201:web:e270d62a1865c3ee75fb68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage };
