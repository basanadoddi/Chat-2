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
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }