// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW3EJitGL4XgWo8d600_CnmIeX1BIpe4A",
  authDomain: "programming-learning-platform.firebaseapp.com",
  projectId: "programming-learning-platform",
  storageBucket: "programming-learning-platform.appspot.com",
  messagingSenderId: "587837408722",
  appId: "1:587837408722:web:478008a33da3601a14f40b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;