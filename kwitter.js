firebaseConfig = {
    apiKey: "AIzaSyCPVF-w-YWTe19oVv6UJBoKu-pWFRjO-vs",
    authDomain: "kwitter-7f9f1.firebaseapp.com",
    databaseURL: "https://kwitter-7f9f1-default-rtdb.firebaseio.com",
    projectId: "kwitter-7f9f1",
    storageBucket: "kwitter-7f9f1.appspot.com",
    messagingSenderId: "25347107610",
    appId: "1:25347107610:web:9e641689e2fb933d57daa3"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
function adduser() {
    username=document.getElementById("user_name").value 
    localStorage.setItem("username",username)
    console.log("inside")
    firebase.database().ref("/").child(username).update({purpose:'adding user'})
    console.log("inside2")
    window.location="kwitter_room.html"
}