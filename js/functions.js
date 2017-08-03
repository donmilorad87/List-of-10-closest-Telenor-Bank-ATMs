(function() {

    var x = document.getElementById("demo");
    var container = document.getElementById('results');
    var list = document.getElementById('resultsList');
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
    type:'atm',
    radius: '10000000',
	keyword:'telenor'
};


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
             list.innerHTML += '<li style="font-family: "MyriadProLight";"> <b> place_name:</b> '+ results[i].name + '</br> <b>place_coordinates:</b>  ' + results[i].geometry.location.lat()+', '+results[i].geometry.location.lng() + " <br> <b>Place_id: </b> " + results[i].id   + '<br> <b>Place_adress: </b>' + results[i].vicinity + '<br> <b>Distance from user location: </b>' +distance+' m' + '<hr> <b>Static map: </b> <img src="https://maps.google.com/maps/api/staticmap?center=' + results[i].geometry.location.lat()+', '+results[i].geometry.location.lng() + '&maptype=roadmap&zoom=14&size=200x200&markers=icon:http://mile.cloud-industry.com/zz_KS0_icon.ico|'+ results[i].geometry.location.lat()+', '+results[i].geometry.location.lng()  +'&key=AIzaSyBTmcSBUDmoAwiaFFIbsslB4IGJRruz--U'  + '"></li><hr>';
            
            }
            document.getElementById('help1').innerHTML=JSON.stringify(employees);
           
		
    }
}
}
})();
 

var button_element1 = document.getElementById('sortingAsc');
 var button_element2 = document.getElementById('sortingDsc');
 
var onclick = button_element1.getAttribute("onclick");  

// if onclick is not a function, it's not IE7, so use setAttribute
if(typeof(onclick) != "function") { 
    button_element1.setAttribute('onclick','sortingAsc();' + onclick); // for FF,IE8,Chrome

// if onclick is a function, use the IE7 method and call onclick() in the anonymous function
} else {
    button_element1.onclick = function() { 
       sortingAsc();
        onclick();
    }; // for IE7
}

var onclick = button_element2.getAttribute("onclick");  

// if onclick is not a function, it's not IE7, so use setAttribute
if(typeof(onclick) != "function") { 
    button_element2.setAttribute('onclick','sortingDsc();' + onclick); // for FF,IE8,Chrome

// if onclick is a function, use the IE7 method and call onclick() in the anonymous function
} else {
    button_element2.onclick = function() { 
        sortingDsc();
        onclick();
    }; // for IE7
}


		
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
     
        
    
        
        buffer+= '<li style="font-family: "MyriadProLight";"> <b> place_name:</b> '+ item.placeName + '</br> <b>place_coordinates:</b>  ' + item.placeCoordinates + " <br> <b>Place_id: </b> " + item.placeId   + '<br> <b>Place_adress: </b>' + item.placeAdress + '<br> <b>Distance from user location: </b>' +item.placeDistanceFromUserLocation+' m <hr> <b>Static map: </b> <img src="https://maps.google.com/maps/api/staticmap?center=' + item.placeCoordinates + '&maptype=roadmap&zoom=14&size=200x200&markers=icon:http://mile.cloud-industry.com/zz_KS0_icon.ico|' + item.placeCoordinates + '&key=AIzaSyBTmcSBUDmoAwiaFFIbsslB4IGJRruz--U'  + '"></li><hr>';
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
     
        
    
        
        buffer+= '<li style="font-family: "MyriadProLight";"> <b> place_name:</b> '+ item.placeName + '</br> <b>place_coordinates:</b>  ' + item.placeCoordinates + " <br> <b>Place_id: </b> " + item.placeId   + '<br> <b>Place_adress: </b>' + item.placeAdress + '<br> <b>Distance from user location: </b>' +item.placeDistanceFromUserLocation+' m<hr> <b>Static map: </b> <img src="https://maps.google.com/maps/api/staticmap?center=' + item.placeCoordinates + '&maptype=roadmap&zoom=14&size=200x200&markers=icon:http://mile.cloud-industry.com/zz_KS0_icon.ico|' + item.placeCoordinates + '&key=AIzaSyBTmcSBUDmoAwiaFFIbsslB4IGJRruz--U'  + '"></li><hr>';
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
