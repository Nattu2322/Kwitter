
var firebaseConfig = {
      apiKey: "AIzaSyARM03HxOemJWa5I0L9lMfLAuLRcU5moPY",
      authDomain: "kwitter-ac6bd.firebaseapp.com",
      databaseURL: "https://kwitter-ac6bd-default-rtdb.firebaseio.com",
      projectId: "kwitter-ac6bd",
      storageBucket: "kwitter-ac6bd.appspot.com",
      messagingSenderId: "81189396652",
      appId: "1:81189396652:web:d8f70c80c3b8fc882c3f09",
      measurementId: "G-NPNG37JRB1"
    };
firebase.initializeApp(firebaseConfig);
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_namee", room_name);
      window.location = "kwitter_room.html";
      
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById('output').innerHTML += row;

      //End code
      });});}
getData();
function redirect(name){
      localStorage.setItem('room_name',name);
      window.location = "kwitter_page.html";
}