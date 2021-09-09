  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDERFpo7pSfkaUM9iT-cll7tJVWQtdv9D8",
    authDomain: "foodninja-pwa-7ab44.firebaseapp.com",
    projectId: "foodninja-pwa-7ab44",
    storageBucket: "foodninja-pwa-7ab44.appspot.com",
    messagingSenderId: "1014499526141",
    appId: "1:1014499526141:web:55ce1a512abf334c94c594",
    measurementId: "G-TTCQL10VV8"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

