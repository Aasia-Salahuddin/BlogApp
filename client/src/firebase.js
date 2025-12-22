// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3utNt-m_oVgiGhyJP7bP_iJ78i6UQISg",
  authDomain: "mernblogapp-c46d3.firebaseapp.com",
  projectId: "mernblogapp-c46d3",
  storageBucket: "mernblogapp-c46d3.firebasestorage.app",
  messagingSenderId: "973539128806",
  appId: "1:973539128806:web:908230dd623d75d2b61227"
  //measurementId: "G-LKTY9020WC"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// ✅ EXPORT app
export const app = initializeApp(firebaseConfig);

// ✅ Safe analytics (important for Vite)
export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;

