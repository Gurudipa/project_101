// Your web app's Firebase configuration

//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADLZKOfl8KFdBaHeQO2Upmg_EouRHOswo",
  authDomain: "project100-d49fa.firebaseapp.com",
  databaseURL: "https://project100-d49fa-default-rtdb.firebaseio.com",
  projectId: "project100-d49fa",
  storageBucket: "project100-d49fa.appspot.com",
  messagingSenderId: "207208077393",
  appId: "1:207208077393:web:c02ec1a68bbfe9e3158070",
  measurementId: "G-L3BK00WMX6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  





function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
}

user_name
room_name








