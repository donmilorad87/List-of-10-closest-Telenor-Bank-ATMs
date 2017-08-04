# List-of-10-closest-Telenor-Bank-ATMs
After you approve geolocation, you will get list of 10 closest Telenor Bank ATMs nearest to the youre location. 

Paramters included in listing of places are: 
1. User geolocation;
2. Radius of search;
3. type of google place;
4. keyword for searching purpose;


var request = {
                location: new google.maps.LatLng(lat,lng),
                radius: '1000000',
                type:'atm',
                keyword:'telenor'
              }; 

After you click generate custom map button, script will dinamicly generate json and send ti to PHP. PHP will just use file_put_contents() function to insert youre json in already created file (.json). After json is inserted, script makes call for creating clusterMaps, and soon map will be vissible.

Used tehnologies: Google Maps JavaScript API, Google Static Maps API, Google Places API Web Service, Google Maps Geocoding API, Google Maps Distance Matrix API, Google Maps Geolocation API, JavaScript, Ajax, JSON, PHP, HTML5, CSS3.

Live demo: https://mile.cloud-industry.com/qTest.php
