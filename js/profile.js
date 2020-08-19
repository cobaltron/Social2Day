database=firebase.database();
var ref = firebase.database().ref('/posts');
var posts,keys;
function put()
{
    var user = firebase.auth().currentUser;
    ref.off("value");                          
    ref.on("value", gotData, errData);
    function gotData(data) 
    {
        posts = data.val();
        // Grab the keys to iterate over the object
        keys = Object.keys(posts);
        console.log(keys);
        $("#total").text("Teams Registered:"+keys.length);
        var a= document.getElementById('feed');
        var content='';
    for (var i = keys.length-1; i >=0; i--) 
    {
        // Look at each user
        var key = keys[i];
        if(posts[key].email==user.email)
        {
            content+='<div class="row">';
            content+='<div class="col s12 m12">';
            content+='<div class="card blue-grey darken-1">';
            content+='<div class="card-content white-text">';
            content+='<span class="card-title">'+posts[key].title+'</span><a href="#">Tag-'+posts[key].tag+'</a>';
            content+='<p>'+posts[key].description+'</p>';
            content+='</div>';
            content+='<div class="card-action">';
            content+='<a href="#">'+posts[key].name+'</a>';
            content+='</div>';
            content+='</div></div></div>';
        //var usr = participants[key];
        }
        //console.log(usr);
        //$('#ex-table').append(content);
        a.innerHTML=content;
    }
    //console.log(content);
    }
    function errData(error) 
        {
            console.log("Something went wrong.");
            console.log(error);
        }
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var img=document.getElementById("image");
        img.src=user.photoURL;
        var name=document.getElementById("name");
        $("#name").html(user.displayName);
        var x = document.getElementById("signin");
        x.style.display="none";
        $("#status").html("You are logged in");
    } else {
        $("#status").html("You are not logged in");
        var x = document.getElementById("signin");
        x.style.display="block";
        var img=document.getElementById("image");
        img.src="";
        var name=document.getElementById("name");
        $("#name").html("");
        var p = document.getElementById("posts");
        p.style.display="none";

    }
  });



function refresh()
{

    document.getElementById('feed').innerHTML="";
    put();
        //firebase.authDomain();
}