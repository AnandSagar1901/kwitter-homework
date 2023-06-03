//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDdJCK3nNBLl6eaUFLWJ1bUA0NGX42friY",
      authDomain: "kwitter2-31f08.firebaseapp.com",
      databaseURL: "https://kwitter2-31f08-default-rtdb.firebaseio.com",
      projectId: "kwitter2-31f08",
      storageBucket: "kwitter2-31f08.appspot.com",
      messagingSenderId: "201423456825",
      appId: "1:201423456825:web:499c70adb315b08e2d9be8"
    };
  
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
