
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCPVF-w-YWTe19oVv6UJBoKu-pWFRjO-vs",
      authDomain: "kwitter-7f9f1.firebaseapp.com",
      databaseURL: "https://kwitter-7f9f1-default-rtdb.firebaseio.com",
      projectId: "kwitter-7f9f1",
      storageBucket: "kwitter-7f9f1.appspot.com",
      messagingSenderId: "25347107610",
      appId: "1:25347107610:web:9e641689e2fb933d57daa3"
};
// Initialize Firebase
document.getElementById("Welcome").innerHTML = "Welcome " + localStorage.getItem("username")
firebase.initializeApp(firebaseConfig);
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log('room names' + Room_names)
                  row = "<div class='room_name' id=" + Room_names + "onclick=redirecttoroomname(this.id)>" + Room_names + "</div><hr>"
                  console.log(row)
                  document.getElementById("output").innerHTML += row
                  //End code
            });
      });
}
getData();
function addroom() {
      room_name = document.getElementById('room_name').value
      firebase.database().ref("/").child(room_name).update({ test: "Adding room name" })
      localStorage.setItem('room_name', room_name)
      window.location = "kwitter_page.html"
}
function redirecttoroomname(name) {
      console.log(name)
      localStorage.setItem('room_name', room_name)
      window.location = "kwitter_page.html"
}
function logout() {
      localStorage.removeItem('room_name')
      localStorage.removeItem('username')
      window.location='index.html'
}
