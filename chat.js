// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDuSebvd2XZeiRFVUzoFXXU5eXSlOFZdvo",
    authDomain: "chats-f94ec.firebaseapp.com",
    databaseURL: "https://chats-f94ec-default-rtdb.firebaseio.com",
    projectId: "chats-f94ec",
    storageBucket: "chats-f94ec.appspot.com",
    messagingSenderId: "470720922820",
    appId: "1:470720922820:web:d09eb67873552ba1137591",
    measurementId: "G-JT38NRCZXE"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
     
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



