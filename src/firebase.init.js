// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBftWI2TM4_gW2MlUU9j_JEcgArCw2bpe8",
    authDomain: "ema-jhon-simple-auth-7f8c2.firebaseapp.com",
    projectId: "ema-jhon-simple-auth-7f8c2",
    storageBucket: "ema-jhon-simple-auth-7f8c2.appspot.com",
    messagingSenderId: "463768627835",
    appId: "1:463768627835:web:f7d907d9c8ba95e53090de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;