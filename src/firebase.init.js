// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0osFQK2QU72twIXTCdIFF_lldcZ6poew",
    authDomain: "independent-service-prov-fd90d.firebaseapp.com",
    projectId: "independent-service-prov-fd90d",
    storageBucket: "independent-service-prov-fd90d.appspot.com",
    messagingSenderId: "71319175889",
    appId: "1:71319175889:web:6a67690b1f265cd398bbf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;