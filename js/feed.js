database=firebase.database();
var ref = firebase.database().ref('/posts');
function refresh()
{

    document.getElementById('feed').innerHTML="";
    put();
        //firebase.authDomain();
}
function put()
{
    
    ref.off("value");                          
    ref.on("value", gotData, errData);
    function gotData(data) 
    {
        var posts = data.val();
        // Grab the keys to iterate over the object
        var keys = Object.keys(posts);
        $("#total").text("Teams Registered:"+keys.length);
        var a= document.getElementById('feed');
        var content='';
    for (var i = keys.length-1; i >=0; i--) 
    {
        // Look at each user
        var key = keys[i];
        //var usr = participants[key];
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