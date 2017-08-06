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
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  </head>
 
  <body id="bodyZ" style="overflow:hidden;opacity:1;">
      <div id="backgroundDiv"></div>
      <div id="loadingDiv">
          <img id="loading" src="https://quantox.com/assets/favicons/favicon-96x96.png"  
          style="will-change:auto; top:72px;  width: 36px; position: relative; left: 38px; -webkit-animation: rotation 2s infinite cubic-bezier( 1, 0.11, 0.6, 0.45);">
          <i class="fa fa-spinner" id="loading2" aria-hidden="true" style="will-change:auto; font-size: 100px; font-weight: 100; position: relative; left: 8px; color: #96ca3a; "></i>
          </div>
      <div class="mainDiv" id="mainDiv" style="opacity:0; transition:0.66s;">
    <p id="help1" style="display:none;">
    </p>
    <p id="helpinGdemo1" style="display:none;">atm</p>
     <p id="helpinGdemo2" style="display:none;">telenor</p>
      <p id="helpinGdemo3" style="display:none;">telenor</p>
    <p id="help2" style="display:none;">
    </p>
  <div id="setMapCluster" style="display:none;"></div>
    <div id="results" style="display:none;">
   
    </div>
  <div style="max-width: 300px;   float: right;height: 100%; position: relative; margin-bottom: 32px;overflow: hidden;padding-right: 16px;background: white;padding: 16px; border: 2px solid #96ca3a; border-radius: 4px;">
    <div style="width:100%; position:relative; z-index:16; margin-bottom: 3em;">
        
        <button class="buttonSort"  id="sortingAsc"> Sort by distance - Asc</button>
        <button class="buttonSort"  id="sortingDsc"> Sort by distance - Dsc</button>
        
    </div>
  <ol id="resultsList" style="padding-left:8px; position: relative;
    z-index: 12;"></ol>
  
  </div>
    <div class="leftDiv"> 
    
        <h3> List of 10 closest "Telenor ATMs"
        </h3> 
        <img id="sirakuza" style="border:2px solid #96ca3a; transition:0.33s;"> 
        <p id="demo">
        </p>
    
    </div>
    <div style="float:left;    float: left;
    width: 300px;
    margin-left: 32px;
    position: relative;
    z-index: 22;">
    <div style="border:2px solid #96ca3a;border-radius:4px;padding:8px;float: left;display: block; background:white;    max-width: 328px;">
     <input type="text" placeholder="search here: default type string format: atm" class="changeSite2" id="searchString1" style="display:none"/>
       <p style="    margin: 0;padding: 0; float:left;">Search by string: type,keyword</p><br>
     <input type="text" placeholder="search here: default search string: atm,telenor" class="changeSite2" id="searchString2" style="    margin-top: 8px!important;
    position: relative;
    right: 10px;
    width: 256px;
    float: left;"/>
     <p>Enter string in this format: <b>atm,telenor</b></p>
     <p> You can see supported types in this link: <a href="https://developers.google.com/places/supported_types" target="_blank"> See search types in <b>TABLE 1</b></a> <p style="font-size:20; font-weight:bold">Supported types for search are only in <span style="font-size:22px">TABLE 1.</span> </p></p>
        <p> First part of string is reserved for type of Google Place you want to of search: type:'atm' or type:'bank', </p>
         <p> Seccond part of string is reserved for keyword of Google Place you want to of search:: type:'telenor' or type:'intesa'</p>
            <p>So if you want to search please enter string in this format <b>bank,intesa</b></p>
     <input type="button" value="Search Google Places by 'type' and 'keyword'" class="changeSite" id="search" style="    margin: 0!important;
    position: relative;
    right: 14px;"/>
    </div>
    <div style="border:2px solid #96ca3a;border-radius:4px;padding:8px;float: left;display: block; margin-top:32px; background:white;max-width: 328px;">
     <p style="    margin: 0;padding: 0; float:left;  width: 100%; ">Search by string: keyword</p><br>
     <input type="text" placeholder="search here: searc only by keyword" class="changeSite2" id="searchString3" style="      margin-top: 8px!important;
    position: relative;
    right: 10px;
    width: 256px;
    float: left;"/>
     <p>In this input field you only need to enter keyword for Google Places search.</p>
            <p>So if you want to search please enter string in this format <b>bank.</b> Also you can use multiple words separated with blank space.</p>
     <input type="button" value="Search Google Places by 'keyword'" class="changeSite" id="search2" style="    margin: 0!important;
    position: relative;
    right: 14px;"/>
    </div>
     <script>
        
         document.getElementById("search").addEventListener("click", function(){
             var x = document.getElementById("searchString1").value;
               var y = document.getElementById("searchString2").value;
             if ( x === '' &&  y === '' ) {
            alert('you need to enter search string for type and search string for keyword also!!!');
             }
             else{
                 
                   // variable is undefined or null

             
              document.getElementById('helpinGdemo1').innerHTML= x;
              document.getElementById('helpinGdemo2').innerHTML= y;
              document.getElementById('resultsList').innerHTML='';

     getLocation2();
     setTimeout(function(){ setBgMap(); }, 100);
      document.getElementById('myIframe').style.opacity='0';
    document.getElementById('myIframe').style.height='0px';
    document.getElementById('changeSite').style.display='block';

      setTimeout(function(){document.getElementById('changeSite').style.opacity='1'; }, 360);  
             }
});



document.getElementById("search2").addEventListener("click", function(){
             var x = document.getElementById("searchString3").value;
            
             if ( x === '' ) {
            alert('you need to enter keyword for perform search!!!');
             }
             else{
                 
                   // variable is undefined or null

             
              document.getElementById('helpinGdemo3').innerHTML= x;
              document.getElementById('resultsList').innerHTML='';

     getLocation3();
     setTimeout(function(){ setBgMap(); }, 100);
      document.getElementById('myIframe').style.opacity='0';
    document.getElementById('myIframe').style.height='0px';
    document.getElementById('changeSite').style.display='block';

      setTimeout(function(){document.getElementById('changeSite').style.opacity='1'; }, 360);  
             }
});


     </script>
    </div>
    </div>
    <div style="width:100%; float:left; opacity:0;    background: white; 
    border: 2px solid #96ca3a;
    border-radius: 4px; margin-bottom:32px; margin-top: 32px;    position: relative;
    z-index: 22;" id="generateClusteringMpainz">
  <input type="button" value="Generate cluster map" class="changeSite" id="changeSite" onClick="setMapCluster()" />
<iframe id="myIframe" src="https://mile.cloud-industry.com/clusterMap/index.html" scrolling="yes" onLoad="iframeDidLoad();" onclick="makeCluster()"></iframe>
  </div>  

  <script async defer src="https://maps.googleapis.com/maps/api/js?libraries=places,geometry&amp;key=AIzaSyBTmcSBUDmoAwiaFFIbsslB4IGJRruz--U" type="text/javascript"> </script>

  
   <script type="text/javascript" src="js/functions47.js"></script>
    <script type="text/javascript" src="js/functions41.js"></script>
    <script>
        (function () {
            
    var cookies = document.cookie.split("; ");
    for (var c = 0; c < cookies.length; c++) {
        var d = window.location.hostname.split(".");
        while (d.length > 0) {
            var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
            var p = location.pathname.split('/');
            document.cookie = cookieBase + '/';
            while (p.length > 0) {
                document.cookie = cookieBase + p.join('/');
                p.pop();
            };
            d.shift();
        }
    }
})();
        
    checkCookie();    
    </script>
  </body>
</html>
