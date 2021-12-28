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

function addUser() {

    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}
function addUser() 
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
add = firebaselink

