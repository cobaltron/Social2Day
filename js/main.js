/**$(document).ready(function() {
    var user = firebase.auth().currentUser;
    if (user != null) {
        var name = user.displayName;
        var email = user.email;
        console.log(email);
    }
});
*/
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById('name').value=user.displayName;
        document.getElementById('email').value=user.email;
        $("#status").html("You are logged in");
        var x = document.getElementById("logout");
        x.style.display="inline";
    } else {
        $("#status").html("You are posting as a guest");
        var x = document.getElementById("logout");
        x.style.display="none";
    }
  });

function logout(){
    firebase.auth().signOut().then(function() {
        alert("Logged out!");
        var x = document.getElementById("logout");
        x.style.display="none";
      }).catch(function(error) {
        // An error happened.
      });
      
}
function data()
{     
      database=firebase.database();
      var name=document.getElementById('name').value;
      var title=document.getElementById('title').value;
      var email=document.getElementById('email').value;
      var desc=document.getElementById('desctext').value;
      var e = document.getElementById("tags");
      var tag = e.options[e.selectedIndex].value;
      
      var data={
          name:name,
          email:email,
          description:desc,
          title:title,
          tag:tag
      }

      var ref=firebase.database().ref('/posts');
      ref.push(data);
        
}
