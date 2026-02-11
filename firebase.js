// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkipiBcAbnQf7of3Rjv5apjnmi3Ap6_Cw",
  authDomain: "gamblesalen-d6a11.firebaseapp.com",
  projectId: "gamblesalen-d6a11",
  storageBucket: "gamblesalen-d6a11.firebasestorage.app",
  messagingSenderId: "1015495876536",
  appId: "1:1015495876536:web:42b3d4bbb8f2c48c85794d",
  measurementId: "G-Z5FHHNX1FT"
};


const app = initializeApp(firebaseConfig);

// Initialize other Firebase services you plan to use
export const db = getFirestore(app);
export const auth = getAuth(app);
// export const storage = getStorage(app); // if you use Cloud Storage

// You can also export the app instance if needed
export default app;