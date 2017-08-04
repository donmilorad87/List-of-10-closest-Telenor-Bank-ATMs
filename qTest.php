 <?php
if (isset($_SERVER['HTTP_COOKIE'])) {
    $cookies = explode(';', $_SERVER['HTTP_COOKIE']);
    foreach($cookies as $cookie) {
        $parts = explode('=', $cookie);
        $name = trim($parts[0]);
        setcookie($name, '', time()-1000);
        setcookie($name, '', time()-1000, '/');
    }
}
  ?>
  
<!doctype html>
<html>
  <head> 
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> 
    <link rel="shortcut icon" type="image/png" href="https://quantox.com/assets/favicons/favicon-16x16.png"/>
    <title>Qantox test</title> 
    <meta name="description" content="Qantox front-end test"> 
    <meta name="author" content="Milorad Djukovic">
    <!--[if lt IE 9]> <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
     <style>
      
      #loading {
		-webkit-animation: rotation 2s infinite linear;
}

#loading2 {
		-webkit-animation: rotation2 2s infinite linear;
}

@-webkit-keyframes rotation {
		from {
				-webkit-transform: rotate(0deg);
		}
		to {
				-webkit-transform: rotate(360deg);
		}
}
@-webkit-keyframes rotation2 {
		from {
				-webkit-transform: rotate(0deg);
		}
		to {
				-webkit-transform: rotate(-360deg);
		}
}      
  </style>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  </head>
 
  <body id="bodyZ">
      <div id="backgroundDiv" style="will-change:auto; width:100vw; height:100vh; background:white; position:absolute; z-index:10; opacity:1; transition:0.33s;"></div>
      <div id="loadingDiv" style="will-change:auto; display: block; width: 100px; height: 100px;position:absolute; z-index:11; transition: 0.33s 0.33s;top: calc(50vh - 100px) ;left: calc(50vw - 50px); opacity: 1; ">
          <img id="loading" src="https://quantox.com/assets/favicons/favicon-96x96.png"  
          style="will-change:auto; top:72px;  width: 36px; position: relative; left: 38px; -webkit-animation: rotation 2s infinite cubic-bezier( 1, 0.11, 0.6, 0.45);">
          <i class="fa fa-spinner" id="loading2" aria-hidden="true" style="will-change:auto; font-size: 100px; font-weight: 100; position: relative; left: 8px; color: #96ca3a; "></i>
          </div>
      <div class="mainDiv" id="mainDiv" style="opacity:0; transition:0.66s;">
    <p id="help1" style="display:none;">
    </p>
    <p id="help2" style="display:none;">
    </p>
  <div id="results4" style="display:none;"></div>
    <div id="results" style="display:none;">
   
    </div>
  <div style="float:right; height:100%;position:relative; margin-bottom:32px; overflow:hidden; padding-right: 16px;">
    <div style="width:100%; position:relative; z-index:11; margin-bottom: 3em;">
        
        <button class="buttonSort" style="float: right; font-size:14px; width:100%;margin-bottom:1em; border-radius:0.25em;" id="sortingAsc"> Sort by distance - Asc</button>
        <button class="buttonSort"  style="float: right; font-size:14px; width:100%;margin-bottom:1em; border-radius:0.25em; " id="sortingDsc"> Sort by distance - Dsc</button>
        
    </div>
  <ol id="resultsList" style=""></ol>
  
  </div>
    <div class="leftDiv"> 
    
        <h3> List of 10 closest "Telenor ATMs"
        </h3> 
        <img id="sirakuza" style="border:2px solid #96ca3a;"> 
        <p id="demo">
        </p>
    
    </div>
    
    </div>
    <div style="width:100%; float:left; opacity:0;" id="generateClusteringMpainz">
  <input type="button" value="Generate cluster map" class="changeSite buttonSort" id="changeSite" onClick="setMapCluster()" />
<iframe id="myIframe" src="https://mile.cloud-industry.com/clusterMap/index.html" scrolling="yes" onLoad="iframeDidLoad();" onclick="makeCluster()"></iframe>
  </div>  

  <script async defer src="https://maps.googleapis.com/maps/api/js?libraries=places,geometry&amp;key=AIzaSyBTmcSBUDmoAwiaFFIbsslB4IGJRruz--U" type="text/javascript"> </script>
  <script type="text/javascript">
var VanillaRunOnDomReady = function() {
var x = document.getElementById("demo");
 getLocation();
 
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = 'User HTML5 curent: ' + position.coords.latitude + ", " + position.coords.longitude;
    
    var zukorlazovic =document.getElementById("demo").innerHTML;
    var xzt= position.coords.latitude; var xztt = position.coords.longitude;
var request = {
    location: new google.maps.LatLng(xzt,xztt),
    radius: '1000000',
    type:'atm',
	keyword:'telenor'
};
var container = document.getElementById('results');
var list = document.getElementById('resultsList');
var service = new google.maps.places.PlacesService(container);
service.nearbySearch(request, callback);
function callback(results, status) {
    
    
    
    if (status == google.maps.places.PlacesServiceStatus.OK) {
    var employees1 = [];
       var employees2 = [];
     
      document.getElementById('results4').innerHTML=JSON.stringify(results);
        for (var i = 0; i < results.length; i++) {
  
        (function IIFE(){
            var j = i;
            if (j<10){
                
                
                    var a = new google.maps.LatLng(request.location.lat(),request.location.lng());
        var b = new google.maps.LatLng(results[i].geometry.location.lat(),results[i].geometry.location.lng());
        var distance = google.maps.geometry.spherical.computeDistanceBetween(a,b);
          
            
             employees1.push({ 
        "placeName" : results[i].name,
        "placeCoordinates"  : results[i].geometry.location.lat()+', '+results[i].geometry.location.lng(),
        "placeId"       : results[i].id,
        "placeAdress"       : results[i].vicinity,
        "placeDistanceFromUserLocation"       : distance
    });
       
             employees2.push({ 
        "placeName" : results[i].name,
        "placeCoordinates"  : results[i].geometry.location.lat()+', '+results[i].geometry.location.lng(),
        "placeId"       : results[i].id,
        "placeAdress"       : results[i].vicinity,
        "placeDistanceFromUserLocation"       : distance
    });
            container.innerHTML += '&markers=icon:http://mile.cloud-industry.com/zz_KS0_icon.ico|' + results[i].geometry.location.lat()+', '+results[i].geometry.location.lng();
             list.innerHTML += '<li> <b> place_name:</b><span>  '+ results[i].name + '</span> </br> <b>place_coordinates:</b> <span>  ' + results[i].geometry.location.lat()+', '+results[i].geometry.location.lng() + " </span> <br> <b>Place_id: </b> <span> " + results[i].id   + '</span> <br> <b>Place_adress: </b><span> ' + results[i].vicinity + '</span> <br> <b>Distance from user location: </b><span> ' +distance+' m</span> ' + '<hr> <b>Static map: </b> <img src="https://maps.google.com/maps/api/staticmap?center=' + results[i].geometry.location.lat()+', '+results[i].geometry.location.lng() + '&maptype=roadmap&zoom=16&size=200x200&markers=icon:http://mile.cloud-industry.com/zz_KS0_icon.ico|'+ results[i].geometry.location.lat()+', '+results[i].geometry.location.lng()  +'&style=feature:road.local%7Celement:geometry.fill%7Ccolor:0x96ca3a&style=feature:road.arterial%7Celement:geometry.fill%7Ccolor:0x96ca3a&key=AIzaSyBTmcSBUDmoAwiaFFIbsslB4IGJRruz--U'  + '"></li><hr>';
            
            
        
        
                
                
            }else{
                
                var a = new google.maps.LatLng(request.location.lat(),request.location.lng());
        var b = new google.maps.LatLng(results[i].geometry.location.lat(),results[i].geometry.location.lng());
        var distance = google.maps.geometry.spherical.computeDistanceBetween(a,b);
          
            
             employees2.push({ 
        "placeName" : results[i].name,
        "placeCoordinates"  : results[i].geometry.location.lat()+', '+results[i].geometry.location.lng(),
        "placeId"       : results[i].id,
        "placeAdress"       : results[i].vicinity,
        "placeDistanceFromUserLocation"       : distance
    });
                
            }
        })();
    
    
        
            }
             document.getElementById('help2').innerHTML=employees2.length;
            document.getElementById('help1').innerHTML=JSON.stringify(employees1);
           document.getElementById('results4').innerHTML=JSON.stringify(employees2);
        
		checkCookie();
    }
}
}
}


 function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("clusterMapingZ");
    if (user != "") {
        deleteAllCookies();
         setCookie("clusterMapingZ", user, 30);
    } else {
       user = document.getElementById('help2').innerHTML;
       if (user != "" && user != null) {
           setCookie("clusterMapingZ", user, 30);
       }
    }
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

var alreadyrunflag = 0;
if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", function(){
        alreadyrunflag=1; 
        VanillaRunOnDomReady();
    }, false);
else if (document.all && !window.opera) {
    document.write('<script type="text/javascript" id="contentloadtag" defer="defer" src="javascript:void(0)"><\/script>');
    var contentloadtag = document.getElementById("contentloadtag")
    contentloadtag.onreadystatechange=function(){
        if (this.readyState=="complete"){
            alreadyrunflag=1;
            VanillaRunOnDomReady();
        }
    }
}
window.onload = function(){
  setTimeout("if (!alreadyrunflag){VanillaRunOnDomReady}", 0);
} 
</script>
  
  
  
  
    <script type="text/javascript" src="js/functions.js"></script>
 <script>
           
  
setTimeout(function(){ document.getElementById('backgroundDiv').style.opacity='0';
document.getElementById('loadingDiv').style.opacity='0';
document.getElementById('mainDiv').style.opacity='1'; 
  document.getElementById("changeSite").style.marginTop = "10px";  
    document.getElementById("changeSite").style.marginBottom = "10px";  
    document.getElementById('generateClusteringMpainz').style.opacity='1'; 
}, 3000);




    </script>
  </body>
</html>
