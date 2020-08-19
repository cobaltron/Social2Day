firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      var log = document.getElementById("logout");
      log.style.display="block";
  } else {
      var x = document.getElementById("logout");
      x.style.display="none";
  }
});


function onsign(){

    console.log("hello");
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);

        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;

        console.log(errorCode);
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
      
      
}

