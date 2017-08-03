<!doctype html>

<html lang="en">
<head>
  <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <title>Qantox test</title>
  <meta name="description" content="Qantox front-end test">
  <meta name="author" content="Milorad Djukovic">
<link rel="shortcut icon" type="image/png" href="https://quantox.com/assets/favicons/favicon-16x16.png"/>


  <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
  <![endif]-->
<script src="https://maps.googleapis.com/maps/api/js?libraries=places,geometry&key=AIzaSyBTmcSBUDmoAwiaFFIbsslB4IGJRruz--U" type="text/javascript"></script>
</head>
<?php 

if (!isset($_SERVER['HTTPS']) || $_SERVER['HTTPS'] !== 'on') {
    if(!headers_sent()) {
        header("Status: 301 Moved Permanently");
        header(sprintf(
            'Location: https://%s%s',
            $_SERVER['HTTP_HOST'],
            $_SERVER['REQUEST_URI']
        ));
        exit();
    }
}

?>
<body id="bodyZ" style="opacity:0; transition:0.2s;">
    <p id="help1" style="display:none;"></p>
<div id="results" style="display:none;"></div>
<div style="float:right; height:100%;position:relative; margin-bottom:32px;">
    <div style="width:100%; position:relative; z-index:11;">
        
        <button style="float: right;margin-right: 20px;" onclick="sortingAsc()"> Sort by distance - Asc</button>
   <button style="float: right;margin-right: 20px;" onclick="sortingDsc()"> Sort by distance - Dsc</button>
        
    </div>
  <ol id="resultsList" style="height:100%;width:90%; position:relative; top:16px; "></ol>
  
  </div>
<div style="display:block;position:relative;width: 400px;">
 <h3> List of 10 closest "Telenor ATMs"</h3>   
    <img style=" float:left;" id="sirakuza">
        <p id="demo" style="float:left;"></p>
    </div>

<script type="text/javascript">//<![CDATA[
var VanillaRunOnDomReady = function() {
    var x = document.getElementById("demo");
 getLocation();
 
setTimeout(function(){ setBgMap(); }, 1000);
setTimeout(function(){   document.getElementById('bodyZ').style.opacity = "1"; }, 1300);
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
    radius: '100000',
	keyword:'telenor atm'
};
var container = document.getElementById('results');
var list = document.getElementById('resultsList');
var service = new google.maps.places.PlacesService(container);
service.nearbySearch(request, callback);
function callback(results, status) {
    
    
    
    if (status == google.maps.places.PlacesServiceStatus.OK) {
    var employees = [];
        for (var i = 0; i < 10; i++) {
         
  
   
    
        var a = new google.maps.LatLng(request.location.lat(),request.location.lng());
        var b = new google.maps.LatLng(results[i].geometry.location.lat(),results[i].geometry.location.lng());
        var distance = google.maps.geometry.spherical.computeDistanceBetween(a,b);
          
            
             employees.push({ 
        "placeName" : results[i].name,
        "placeCoordinates"  : results[i].geometry.location.lat()+', '+results[i].geometry.location.lng(),
        "placeId"       : results[i].id,
        "placeAdress"       : results[i].vicinity,
        "placeDistanceFromUserLocation"       : distance
    });
    
            container.innerHTML += '&markers=icon:http://mile.cloud-industry.com/zz_KS0_icon.ico|' + results[i].geometry.location.lat()+', '+results[i].geometry.location.lng();
             list.innerHTML += '<li> <b> place_name:</b> '+ results[i].name + '</br> <b>place_coordinates:</b>  ' + results[i].geometry.location.lat()+', '+results[i].geometry.location.lng() + " <br> <b>Place_id: </b> " + results[i].id   + '<br> <b>Place_adress: </b>' + results[i].vicinity + '<br> <b>Distance from user location: </b>' +distance+' m' + '<hr> <b>Static map: </b> <img src="https://maps.google.com/maps/api/staticmap?center=' + results[i].geometry.location.lat()+', '+results[i].geometry.location.lng() + '&maptype=roadmap&zoom=14&size=320x200&markers=icon:http://mile.cloud-industry.com/zz_KS0_icon.ico|'+ results[i].geometry.location.lat()+', '+results[i].geometry.location.lng()  +'&key=AIzaSyBTmcSBUDmoAwiaFFIbsslB4IGJRruz--U'  + '"></li><hr>';
            
            }
            document.getElementById('help1').innerHTML=JSON.stringify(employees);
           
		
    }
}
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
}//]]> 
</script>
  <script>
  
  (function() {
   // your page initialization code here
   // the DOM will be available here
})();
		
  function handler(location) {
    var ll, url;
var zumbulkovic = document.getElementById('results').innerHTML;
 
 var str = zumbulkovic;
    var res = str.replace(/amp;/g, "");
 
 
 var accuracy = location.coords.accuracy;
		console.log(accuracy);
	
    ll = [location.coords.latitude, location.coords.longitude].join(',');
    
    document.getElementById('demo').innerHTML ='User current cordinates: <br> Latitude: ' + location.coords.latitude + '<br> Longitude: ' + location.coords.longitude +'<br> Aaccuracy ≈ ' + accuracy +' m' ;
	url = "https://maps.google.com/maps/api/staticmap?center=" + ll + "&maptype=roadmap&zoom=8&size=320x600&markers=" + ll + '' + res +"&key=AIzaSyBTmcSBUDmoAwiaFFIbsslB4IGJRruz--U";
    document.getElementById('sirakuza').setAttribute("src", url);
}   
function setBgMap() {
    navigator.geolocation.getCurrentPosition(handler);
}
 function sortingAsc(){
      var miler2 = JSON.parse(document.getElementById('help1').innerHTML);
    miler2.sort( predicateBy("placeDistanceFromUserLocation") );
    
        miler2.sort( predicateBy("placeDistanceFromUserLocation") ); 
      
          var buffer='';
          for(var i=0; i < miler2.length; i++){ 
        var item = miler2[i]; 
     
        
    
        
        buffer+= '<li> <b> place_name:</b> '+ item.placeName + '</br> <b>place_coordinates:</b>  ' + item.placeCoordinates + " <br> <b>Place_id: </b> " + item.placeId   + '<br> <b>Place_adress: </b>' + item.placeAdress + '<br> <b>Distance from user location: </b>' +item.placeDistanceFromUserLocation+' m <hr> <b>Static map: </b> <img src="https://maps.google.com/maps/api/staticmap?center=' + item.placeCoordinates + '&maptype=roadmap&zoom=14&size=320x200&markers=icon:http://mile.cloud-industry.com/zz_KS0_icon.ico|' + item.placeCoordinates + '&key=AIzaSyBTmcSBUDmoAwiaFFIbsslB4IGJRruz--U'  + '"></li><hr>';
      } 
         
         
         document.getElementById('resultsList').innerHTML=buffer;
}


function sortingDsc(){
    var miler = JSON.parse(document.getElementById('help1').innerHTML);
     
    miler.sort( predicateBy("placeDistanceFromUserLocation") );
    
     
        miler.sort( predicateBy2("placeDistanceFromUserLocation") ); 
  
         var buffer='';
          for(var i=0; i < miler.length; i++){ 
        var item = miler[i]; 
     
        
    
        
        buffer+= '<li> <b> place_name:</b> '+ item.placeName + '</br> <b>place_coordinates:</b>  ' + item.placeCoordinates + " <br> <b>Place_id: </b> " + item.placeId   + '<br> <b>Place_adress: </b>' + item.placeAdress + '<br> <b>Distance from user location: </b>' +item.placeDistanceFromUserLocation+' m<hr> <b>Static map: </b> <img src="https://maps.google.com/maps/api/staticmap?center=' + item.placeCoordinates + '&maptype=roadmap&zoom=14&size=320x200&markers=icon:http://mile.cloud-industry.com/zz_KS0_icon.ico|' + item.placeCoordinates + '&key=AIzaSyBTmcSBUDmoAwiaFFIbsslB4IGJRruz--U'  + '"></li><hr>';
      } 
         
         document.getElementById('resultsList').innerHTML=buffer;
}


function predicateBy(prop){
   return function(a,b){
      if( a[prop] > b[prop]){
          return 1;
      }else if( a[prop] > b[prop] ){
          return -1;
      }
      return 0;
   }
}
function predicateBy2(prop){
   return function(a,b){
      if( a[prop] < b[prop]){
          return 1;
      }else if( a[prop] < b[prop] ){
          return -1;
      }
      return 0;
   }
}
  </script>
  
  
</body>
</html>