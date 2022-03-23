import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBpmEQfcCe2wgzEFxVuF9E-3u283YQW_wI",
  authDomain: "bugs-registry.firebaseapp.com",
  projectId: "bugs-registry",
  storageBucket: "bugs-registry.appspot.com",
  messagingSenderId: "501020876474",
  appId: "1:501020876474:web:97a3ac896dea283b672c83",
  measurementId: "G-THZ5C5X3M4"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

createApp(App).use(router).mount('#app')
