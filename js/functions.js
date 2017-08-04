(function() {


   
    var container = document.getElementById('results');
    var list = document.getElementById('resultsList');
   
 
setTimeout(function(){ setBgMap(); }, 1000);



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
     
        
    
        
        buffer+= '<li style="font-family: "MyriadProLight";"> <b> place_name:</b> '+ item.placeName + '</br> <b>place_coordinates:</b>  ' + item.placeCoordinates + " <br> <b>Place_id: </b> " + item.placeId   + '<br> <b>Place_adress: </b>' + item.placeAdress + '<br> <b>Distance from user location: </b>' +item.placeDistanceFromUserLocation+' m <hr> <b>Static map: </b> <img src="https://maps.google.com/maps/api/staticmap?center=' + item.placeCoordinates + '&maptype=roadmap&zoom=16&size=200x200&markers=icon:http://mile.cloud-industry.com/zz_KS0_icon.ico|' + item.placeCoordinates + '&key=AIzaSyBTmcSBUDmoAwiaFFIbsslB4IGJRruz--U'  + '"></li><hr>';
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
     
        
    
        
        buffer+= '<li style="font-family: "MyriadProLight";"> <b> place_name:</b> '+ item.placeName + '</br> <b>place_coordinates:</b>  ' + item.placeCoordinates + " <br> <b>Place_id: </b> " + item.placeId   + '<br> <b>Place_adress: </b>' + item.placeAdress + '<br> <b>Distance from user location: </b>' +item.placeDistanceFromUserLocation+' m<hr> <b>Static map: </b> <img src="https://maps.google.com/maps/api/staticmap?center=' + item.placeCoordinates + '&maptype=roadmap&zoom=16&size=200x200&markers=icon:http://mile.cloud-industry.com/zz_KS0_icon.ico|' + item.placeCoordinates + '&key=AIzaSyBTmcSBUDmoAwiaFFIbsslB4IGJRruz--U'  + '"></li><hr>';
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
