//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBYcgaYw1GMk1iArjEQs_3v7N5U2HmFqus",
      authDomain: "practice-activity-94-72469.firebaseapp.com",
      databaseURL: "https://practice-activity-94-72469-default-rtdb.firebaseio.com",
      projectId: "practice-activity-94-72469",
      storageBucket: "practice-activity-94-72469.appspot.com",
      messagingSenderId: "236235633201",
      appId: "1:236235633201:web:6a633d44260546ceff1b10"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name)push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
