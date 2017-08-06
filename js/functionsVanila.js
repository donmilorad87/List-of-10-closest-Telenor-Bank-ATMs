var VanillaRunOnDomReady = function() {

 getLocation();
 
}
var  x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
 var keywordString1="'" + document.getElementById("helpinGdemo1").innerHTML +"'";
      var  keywordString2 ="'" + document.getElementById("helpinGdemo2").innerHTML +"'";

    var zukorlazovic =document.getElementById("demo").innerHTML;
    var xzt= position.coords.latitude; var xztt = position.coords.longitude;
var request = {
    location: new google.maps.LatLng(xzt,xztt),
    radius: '637000',
    type: 'atm',
    keyword: 'telenor'
    
};
var container = document.getElementById('results');
var list = document.getElementById('resultsList');
var service = new google.maps.places.PlacesService(container);
service.nearbySearch(request, callback);
function callback(results, status) {
    
    
    
    if (status == google.maps.places.PlacesServiceStatus.OK) {
    var employees1 = [];
       var employees2 = [];
     
      document.getElementById('setMapCluster').innerHTML=JSON.stringify(results);
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
           document.getElementById('setMapCluster').innerHTML=JSON.stringify(employees2);
        
		checkCookie();
    }
}
}


function getLocation2() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition2);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition2(position) {
 var keywordString1="'" + document.getElementById("helpinGdemo1").innerHTML +"'";
      var  keywordString2 = document.getElementById("helpinGdemo2").innerHTML ;
        var partsOfStr = keywordString2.split(',');
        var k1= partsOfStr[0];
        var k2= partsOfStr[1];
console.log(keywordString1);
console.log(keywordString2);
    var zukorlazovic =document.getElementById("demo").innerHTML;
    var xzt= position.coords.latitude; var xztt = position.coords.longitude;
var request2 = {
    location: new google.maps.LatLng(xzt,xztt),
    radius: '637000',
    type: k1,
    keyword: k2
};
var container = document.getElementById('results');
var list = document.getElementById('resultsList');
var service = new google.maps.places.PlacesService(container);
service.nearbySearch(request2, callback2);
function callback2(results2, status) {
    
    
    
    if (status == google.maps.places.PlacesServiceStatus.OK) {
    var employees1 = [];
       var employees2 = [];
     
      document.getElementById('setMapCluster').innerHTML=JSON.stringify(results2);
        for (var i = 0; i < results2.length; i++) {
  
        (function IIFE(){
            var j = i;
            if (j<10){
                
                
                    var a = new google.maps.LatLng(request2.location.lat(),request2.location.lng());
        var b = new google.maps.LatLng(results2[i].geometry.location.lat(),results2[i].geometry.location.lng());
        var distance2 = google.maps.geometry.spherical.computeDistanceBetween(a,b);
          
            
             employees1.push({ 
        "placeName" : results2[i].name,
        "placeCoordinates"  : results2[i].geometry.location.lat()+', '+results2[i].geometry.location.lng(),
        "placeId"       : results2[i].id,
        "placeAdress"       : results2[i].vicinity,
        "placedistance2FromUserLocation"       : distance2
    });
       
             employees2.push({ 
        "placeName" : results2[i].name,
        "placeCoordinates"  : results2[i].geometry.location.lat()+', '+results2[i].geometry.location.lng(),
        "placeId"       : results2[i].id,
        "placeAdress"       : results2[i].vicinity,
        "placedistance2FromUserLocation"       : distance2
    });
            container.innerHTML += '&markers=icon:http://mile.cloud-industry.com/zz_KS0_icon.ico|' + results2[i].geometry.location.lat()+', '+results2[i].geometry.location.lng();
             list.innerHTML += '<li> <b> place_name:</b><span>  '+ results2[i].name + '</span> </br> <b>place_coordinates:</b> <span>  ' + results2[i].geometry.location.lat()+', '+results2[i].geometry.location.lng() + " </span> <br> <b>Place_id: </b> <span> " + results2[i].id   + '</span> <br> <b>Place_adress: </b><span> ' + results2[i].vicinity + '</span> <br> <b>distance2 from user location: </b><span> ' +distance2+' m</span> ' + '<hr> <b>Static map: </b> <img src="https://maps.google.com/maps/api/staticmap?center=' + results2[i].geometry.location.lat()+', '+results2[i].geometry.location.lng() + '&maptype=roadmap&zoom=16&size=200x200&markers=icon:http://mile.cloud-industry.com/zz_KS0_icon.ico|'+ results2[i].geometry.location.lat()+', '+results2[i].geometry.location.lng()  +'&style=feature:road.local%7Celement:geometry.fill%7Ccolor:0x96ca3a&style=feature:road.arterial%7Celement:geometry.fill%7Ccolor:0x96ca3a&key=AIzaSyBTmcSBUDmoAwiaFFIbsslB4IGJRruz--U'  + '"></li><hr>';
            
            
        
        
                
                
            }else{
                
                var a = new google.maps.LatLng(request2.location.lat(),request2.location.lng());
        var b = new google.maps.LatLng(results2[i].geometry.location.lat(),results2[i].geometry.location.lng());
        var distance2 = google.maps.geometry.spherical.computeDistanceBetween(a,b);
          
            
             employees2.push({ 
        "placeName" : results2[i].name,
        "placeCoordinates"  : results2[i].geometry.location.lat()+', '+results2[i].geometry.location.lng(),
        "placeId"       : results2[i].id,
        "placeAdress"       : results2[i].vicinity,
        "placedistance2FromUserLocation"       : distance2
    });
                
            }
        })();
    
    
        
            }
             document.getElementById('help2').innerHTML=employees2.length;
            document.getElementById('help1').innerHTML=JSON.stringify(employees1);
           document.getElementById('setMapCluster').innerHTML=JSON.stringify(employees2);
        
		checkCookie();
    }
}
}




function getLocation3() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition3);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition3(position) {
 var keywordString1="'" + document.getElementById("helpinGdemo3").innerHTML +"'";

      
    var zukorlazovic =document.getElementById("demo").innerHTML;
    var xzt= position.coords.latitude; var xztt = position.coords.longitude;
var request3 = {
    location: new google.maps.LatLng(xzt,xztt),
    radius: '637000',
    keyword: keywordString1
};
var container = document.getElementById('results');
var list = document.getElementById('resultsList');
var service = new google.maps.places.PlacesService(container);
service.nearbySearch(request3, callback3);
function callback3(results3, status) {
    
    
    
   if (status == google.maps.places.PlacesServiceStatus.OK) {
    var employees1 = [];
       var employees2 = [];
     
      document.getElementById('setMapCluster').innerHTML=JSON.stringify(results3);
        for (var i = 0; i < results3.length; i++) {
  
        (function IIFE(){
            var j = i;
            if (j<10){
                
                
                    var a = new google.maps.LatLng(request3.location.lat(),request3.location.lng());
        var b = new google.maps.LatLng(results3[i].geometry.location.lat(),results3[i].geometry.location.lng());
        var distance3 = google.maps.geometry.spherical.computeDistanceBetween(a,b)
          
            
             employees1.push({ 
        "placeName" : results3[i].name,
        "placeCoordinates"  : results3[i].geometry.location.lat()+', '+results3[i].geometry.location.lng(),
        "placeId"       : results3[i].id,
        "placeAdress"       : results3[i].vicinity,
        "placedistance3FromUserLocation"       : distance3
    });
       
             employees2.push({ 
        "placeName" : results3[i].name,
        "placeCoordinates"  : results3[i].geometry.location.lat()+', '+results3[i].geometry.location.lng(),
        "placeId"       : results3[i].id,
        "placeAdress"       : results3[i].vicinity,
        "placedistance3FromUserLocation"       : distance3
    });
            container.innerHTML += '&markers=icon:http://mile.cloud-industry.com/zz_KS0_icon.ico|' + results3[i].geometry.location.lat()+', '+results3[i].geometry.location.lng();
             list.innerHTML += '<li> <b> place_name:</b><span>  '+ results3[i].name + '</span> </br> <b>place_coordinates:</b> <span>  ' + results3[i].geometry.location.lat()+', '+results3[i].geometry.location.lng() + " </span> <br> <b>Place_id: </b> <span> " + results3[i].id   + '</span> <br> <b>Place_adress: </b><span> ' + results3[i].vicinity + '</span> <br> <b>distance3 from user location: </b><span> ' +distance3+' m</span> ' + '<hr> <b>Static map: </b> <img src="https://maps.google.com/maps/api/staticmap?center=' + results3[i].geometry.location.lat()+', '+results3[i].geometry.location.lng() + '&maptype=roadmap&zoom=16&size=200x200&markers=icon:http://mile.cloud-industry.com/zz_KS0_icon.ico|'+ results3[i].geometry.location.lat()+', '+results3[i].geometry.location.lng()  +'&style=feature:road.local%7Celement:geometry.fill%7Ccolor:0x96ca3a&style=feature:road.arterial%7Celement:geometry.fill%7Ccolor:0x96ca3a&key=AIzaSyBTmcSBUDmoAwiaFFIbsslB4IGJRruz--U'  + '"></li><hr>';
            
            
        
        
                
                
            }else{
                
                var a = new google.maps.LatLng(request3.location.lat(),request3.location.lng());
        var b = new google.maps.LatLng(results3[i].geometry.location.lat(),results3[i].geometry.location.lng());
        var distance3 = google.maps.geometry.spherical.computeDistanceBetween(a,b);
          
            
             employees2.push({ 
        "placeName" : results3[i].name,
        "placeCoordinates"  : results3[i].geometry.location.lat()+', '+results3[i].geometry.location.lng(),
        "placeId"       : results3[i].id,
        "placeAdress"       : results3[i].vicinity,
        "placedistance3FromUserLocation"       : distance3
    });
                
            }
        })();
    
    
        
            }
             document.getElementById('help2').innerHTML=employees2.length;
            document.getElementById('help1').innerHTML=JSON.stringify(employees1);
           document.getElementById('setMapCluster').innerHTML=JSON.stringify(employees2);
        
		checkCookie();
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
