import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBSPt2IVGLf-bVhUXn0ypTKgWPycT1H6ps",
    authDomain: "hardygames-d0f10.firebaseapp.com",
    projectId: "hardygames-d0f10",
    storageBucket: "hardygames-d0f10.appspot.com",
    messagingSenderId: "664917822141",
    appId: "1:664917822141:web:e48998aadfa6f030f605d4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;