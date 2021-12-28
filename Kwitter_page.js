var firebaseConfig = {
    apiKey: "AIzaSyD830uxoQkA1-eVY7N5PBhDId-oA1dwicY",
    authDomain: "tthh-a75d3.firebaseapp.com",
    databaseURL: "https://tthh-a75d3-default-rtdb.firebaseio.com",
    projectId: "tthh-a75d3",
    storageBucket: "tthh-a75d3.appspot.com",
    messagingSenderId: "391821258141",
    appId: "1:391821258141:web:2526afdf26caa114f8d374"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name= localStorage.getItem("user_name");
  room_name= localStorage.getItem("room_name");

function send()
{
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";

}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = ("index.html");
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
