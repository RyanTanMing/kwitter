//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCPVF-w-YWTe19oVv6UJBoKu-pWFRjO-vs",
      authDomain: "kwitter-7f9f1.firebaseapp.com",
      databaseURL: "https://kwitter-7f9f1-default-rtdb.firebaseio.com",
      projectId: "kwitter-7f9f1",
      storageBucket: "kwitter-7f9f1.appspot.com",
      messagingSenderId: "25347107610",
      appId: "1:25347107610:web:9e641689e2fb933d57daa3"
};
firebase.initializeApp(firebaseConfig);
room_name=localStorage.getItem('room_name')
user_name=localStorage.getItem('username')
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(message_data)
name1=message_data["name"]
message=message_data["message"]
like=message_data["like"]
name_tag="<h4>"+name1+"<img class='user_tick' src='tick.png' ></h4>"
message_tag="<h4 class='message_h4' >"+message+"</h4>"
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>"
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'>Like "+like+"</span> </button> <hr>"
row=name_tag+message_tag+like_button+spanwithtag
document.getElementById("output").innerHTML+=row
//End code
      } });  }); }
getData();
function send() {
      n=document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,message:n,like:0
      })
      document.getElementById("msg").value=""
}
function logout() {
      localStorage.removeItem('room_name')
      localStorage.removeItem('username')
      window.location='index.html'
}
function updatelike(messageid) {
      button_id=messageid
      likes=document.getElementById(button_id).value
      updatedlikes=Number(likes)+1
      firebase.database().ref(room_name).child(messageid).update({like:updatedlikes})
}