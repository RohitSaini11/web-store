// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf5HE_Uj1LX3Vi2bmezR1HgDEnlLj-r94",
  authDomain: "webstore-1e960.firebaseapp.com",
  projectId: "webstore-1e960",
  storageBucket: "webstore-1e960.appspot.com",
  messagingSenderId: "432502999108",
  appId: "1:432502999108:web:b95044a3534a3f74889411",
  measurementId: "G-TG6MSB1DF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default {app};