var firebaseConfig = {
      apiKey: "AIzaSyAgV8CEkg-CwkaAqgoD57MOJcp9Q7Y2Kz0",
      authDomain: "kwitter-app-1750a.firebaseapp.com",
      databaseURL: "https://kwitter-app-1750a-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-1750a",
      storageBucket: "kwitter-app-1750a.appspot.com",
      messagingSenderId: "1077823025099",
      appId: "1:1077823025099:web:bdd77ff5cc29ecacbfd04e"
    };
    
    // Initialize Firebase
    firebase.initializeApp (firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name- "+ Room_names);
      row="<div class='room_name'id="+Room_names + "onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
      
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_name");
      window.location.replace("index.html");
}