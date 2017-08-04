(function() {


   
    var container = document.getElementById('results');
    var list = document.getElementById('resultsList');
   
 
setTimeout(function(){ setBgMap(); }, 1000);



})();
function iframeDidLoad() {
  
}
function newSite() {
    var sites = ['https://mile.cloud-industry.com/clusterMap/index.html']
    
    document.getElementById('myIframe').src = sites[Math.floor(Math.random() * sites.length)];
     document.getElementById('myIframe').style.opacity='1';
    document.getElementById('myIframe').style.height='650px';
    
      document.getElementById('changeSite').style.opacity='0';
}

function setMapCluster(){
    
    
    
        
var mapJson= document.getElementById('results4').innerHTML;
var obj = JSON.parse(mapJson);
var helperZ= '[';
for(i=0;i<obj.length;i++){
    
      (function IIFE(){
            var j = i;

             var lngLat= obj[i].placeCoordinates; 
               var pieces = lngLat.split(/[\s,]+/);
            if(j < 1){
              
               helperZ+= '{"photo_id":'+ (522081+i)+',"photo_title2":"<p style=\'margin-bottom:6px; font-size:14px;width:98%;font-weight:700;  border-bottom:1px solid #333; color:#222;\'><strong>placeName: </strong>' + obj[i].placeName + '</p><p style=\'font-size:12px;\'><strong>placeId: </strong>' + obj[i].placeId+'</p><p style=\'font-size:12px;\'><strong>placeAdress: </strong>' +obj[i].placeAdress + '</p><p style=\'font-size:12px;\'><strong>placeCoordinates: </strong>' + obj[i].placeCoordinates + '</p><p style=\'font-size:12px;\'><strong>placeDistanceFromUserLocation: </strong>' + obj[i].placeDistanceFromUserLocation + 'm</p>", "photo_title": "<h3 style=\'font-weight:700;border-bottom: 1px solid #E7E7E7; color:#222222; text-align: leftr;\'>List of 10 closest Telenor Bank ATMs</h3><div class=\'hoverMap\'><p style=\'margin-bottom:6px; font-size:14px;width:98%;font-weight:700;  border-bottom:1px solid #333; color:#222222;\'><strong>placeName: </strong>' + obj[i].placeName + '</p><p style=\'font-size:12px;\'><strong>placeId: </strong>' + obj[i].placeId+'</p><p style=\'font-size:12px;\'><strong>placeAdress: </strong>' +obj[i].placeAdress + '</p><p style=\'font-size:12px;\'><strong>placeCoordinates: </strong>' + obj[i].placeCoordinates + '</p><p style=\'font-size:12px;\'><strong>placeDistanceFromUserLocation: </strong>' + obj[i].placeDistanceFromUserLocation + 'm</p></div>", "photo_url": "https://www.telenor.rs/static/images/1/38/438/438_d.png", "photo_file_url": "https://www.telenor.rs/static/images/1/38/438/438_d.png", "longitude":' + pieces[1] +', "latitude":'+pieces[0] + ', "width": 500, "height": 350, "upload_date": "21 January 2007", "owner_id": 109117, "owner_name": "TelenorBanka", "owner_url": "http://www.telenorbanka.rs"},';
     
            }
            else{
               helperZ+= '{"photo_id":'+ (522081+i)+',"photo_title2":"<p style=\'margin-bottom:6px; font-size:14px;width:98%;font-weight:700;  border-bottom:1px solid #333; color:#222;\'><strong>placeName: </strong>' + obj[i].placeName + '</p><p style=\'font-size:12px;\'><strong>placeId: </strong>' + obj[i].placeId+'</p><p style=\'font-size:12px;\'><strong>placeAdress: </strong>' +obj[i].placeAdress + '</p><p style=\'font-size:12px;\'><strong>placeCoordinates: </strong>' + obj[i].placeCoordinates + '</p><p style=\'font-size:12px;\'><strong>placeDistanceFromUserLocation: </strong>' + obj[i].placeDistanceFromUserLocation + 'm</p>", "photo_title": "<div class=\'hoverMap\'><p style=\'margin-bottom:6px; font-size:14px;width:98%;font-weight:700;  border-bottom:1px solid #333; color:#222222;\'><strong>placeName: </strong>' + obj[i].placeName + '</p><p style=\'font-size:12px;\'><strong>placeId: </strong>' + obj[i].placeId+'</p><p style=\'font-size:12px;\'><strong>placeAdress: </strong>' +obj[i].placeAdress + '</p><p style=\'font-size:12px;\'><strong>placeCoordinates: </strong>' + obj[i].placeCoordinates + '</p><p style=\'font-size:12px;\'><strong>placeDistanceFromUserLocation: </strong>' + obj[i].placeDistanceFromUserLocation + 'm</p></div>", "photo_url": "https://www.telenor.rs/static/images/1/38/438/438_d.png", "photo_file_url": "https://www.telenor.rs/static/images/1/38/438/438_d.png", "longitude":' + pieces[1] +', "latitude":'+pieces[0] + ', "width": 500, "height": 350, "upload_date": "21 January 2007", "owner_id": 109117, "owner_name": "TelenorBanka", "owner_url": "http://www.telenorbanka.rs"},';
      
            }
        })();
   

    
    

   
   

}
helperZ = 'var data = { "count": 107,"photos": ' + helperZ.slice(0, -1) +']}';
   var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(ev){
            
         

             if (xhr.readyState == 4 && xhr.status == 200) {
             var krmpoticz = xhr.responseText;
             newSite();
          
           
        }
            
        };
 
        xhr.open('POST', 'ajax.php', true);
        xhr.setRequestHeader("Content-type","application/json");
        
        xhr.send(helperZ);
 
    
    
    
}

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

	
    ll = [location.coords.latitude, location.coords.longitude].join(',');

    document.getElementById('demo').innerHTML ='User current cordinates: <br> Latitude: ' + location.coords.latitude + '<br> Longitude: ' + location.coords.longitude +'<br> Aaccuracy ≈ ' + accuracy +' m' ;
	url = "https://maps.google.com/maps/api/staticmap?center=" + ll + "&maptype=roadmap&zoom=8&size=320x600&markers=" + ll + '' + res +"&style=feature:road.highway%7Celement:geometry.fill%7Ccolor:0x96ca3a&style=feature:road.arterial%7Celement:geometry.fill%7Ccolor:0x96ca3a&&style=feature:road.local%7Celement:geometry.fill%7Ccolor:0x96ca3a&key=AIzaSyBTmcSBUDmoAwiaFFIbsslB4IGJRruz--U";
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
     
        
    
        
        buffer+= '<li style="font-family: "MyriadProLight";"> <b> place_name:</b> '+ item.placeName + '</br> <b>place_coordinates:</b>  ' + item.placeCoordinates + " <br> <b>Place_id: </b> " + item.placeId   + '<br> <b>Place_adress: </b>' + item.placeAdress + '<br> <b>Distance from user location: </b>' +item.placeDistanceFromUserLocation+' m <hr> <b>Static map: </b> <img src="https://maps.google.com/maps/api/staticmap?center=' + item.placeCoordinates + '&maptype=roadmap&zoom=16&size=200x200&markers=icon:http://mile.cloud-industry.com/zz_KS0_icon.ico|' + item.placeCoordinates + '&style=feature:road.local%7Celement:geometry.fill%7Ccolor:0x96ca3a&style=feature:road.arterial%7Celement:geometry.fill%7Ccolor:0x96ca3a&key=AIzaSyBTmcSBUDmoAwiaFFIbsslB4IGJRruz--U'  + '"></li><hr>';
      } 
         
         
         document.getElementById('resultsList').innerHTML=buffer;
}


function sortingDsc(){
    var miler = JSON.parse(document.getElementById('help1').innerHTML);
     
    miler.sort( predicateBy2("placeDistanceFromUserLocation") );
    
     
        miler.sort( predicateBy2("placeDistanceFromUserLocation") ); 
  
         var buffer='';
          for(var i=0; i < miler.length; i++){ 
        var item = miler[i]; 
     
        
    
        
        buffer+= '<li style="font-family: "MyriadProLight";"> <b> place_name:</b> '+ item.placeName + '</br> <b>place_coordinates:</b>  ' + item.placeCoordinates + " <br> <b>Place_id: </b> " + item.placeId   + '<br> <b>Place_adress: </b>' + item.placeAdress + '<br> <b>Distance from user location: </b>' +item.placeDistanceFromUserLocation+' m<hr> <b>Static map: </b> <img src="https://maps.google.com/maps/api/staticmap?center=' + item.placeCoordinates + '&maptype=roadmap&zoom=16&size=200x200&markers=icon:http://mile.cloud-industry.com/zz_KS0_icon.ico|' + item.placeCoordinates + '&style=feature:road.local%7Celement:geometry.fill%7Ccolor:0x96ca3a&style=feature:road.arterial%7Celement:geometry.fill%7Ccolor:0x96ca3a&key=AIzaSyBTmcSBUDmoAwiaFFIbsslB4IGJRruz--U'  + '"></li><hr>';
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
