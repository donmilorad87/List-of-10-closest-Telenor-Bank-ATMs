/**
 * @fileoverview This demo is used for MarkerClusterer. It will show 100 markers
 * using MarkerClusterer and count the time to show the difference between using
 * MarkerClusterer and without MarkerClusterer.
 * @author Luke Mahe (v2 author: Xiaoxi Wu)
 */

function $(element) {
  return document.getElementById(element);
}

var speedTest = {};

speedTest.pics = null;
speedTest.map = null;
speedTest.markerClusterer = null;
speedTest.markers = [];
speedTest.infoWindow = null;

speedTest.init = function() {
var latlng = new google.maps.LatLng(44.115005, 20.072630);
  var options = {
    'zoom': 7,
    'center': latlng,
    'scrollwheel':  false,
    'mapTypeId': google.maps.MapTypeId.ROADMAP,
    'styles':[{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#96ca3a"}]}]

  };

  speedTest.map = new google.maps.Map($('map'), options);
  speedTest.pics = data.photos;
  
  var useGmm = document.getElementById('usegmm');
  google.maps.event.addDomListener(useGmm, 'click', speedTest.change);
  
  
  
  var numMarkers = document.getElementById('nummarkers');
  google.maps.event.addDomListener(numMarkers, 'change', speedTest.change);

  speedTest.infoWindow = new google.maps.InfoWindow({ pixelOffset: new google.maps.Size(0, -18)  });

  speedTest.showMarkers();
};

speedTest.showMarkers = function() {
  speedTest.markers = [];

  var type = 1;
  if ($('usegmm').checked) {
    type = 0;
  }

  if (speedTest.markerClusterer) {
    speedTest.markerClusterer.clearMarkers();
  }

  var panel = $('markerlist');
  panel.innerHTML = '';
  var numMarkers = getCookie("clusterMapingZ");
  for (var i = 0; i < numMarkers; i++) {
    var titleText = speedTest.pics[i].photo_title;
    if (titleText === '') {
      titleText = 'No title';
    }

    var item = document.createElement('DIV');
    var title = document.createElement('A');
    title.href = '#';
    title.className = 'title';
    title.innerHTML = titleText;

    item.appendChild(title);
    panel.appendChild(item);


    var latLng = new google.maps.LatLng(speedTest.pics[i].latitude,
        speedTest.pics[i].longitude);

    var imageUrl = 'https://chart.apis.google.com/chart?cht=mm&chs=30x40&chco=' +
        '448dd1,3060a8,70b7f1&ext=.png&paddding=32';
    var markerImage = new google.maps.MarkerImage(imageUrl,
        new google.maps.Size(30, 40));

    var marker = new google.maps.Marker({
      'position': latLng,
      'icon': markerImage
    });

    var fn = speedTest.markerClickFunction(speedTest.pics[i], latLng);
    google.maps.event.addListener(marker, 'click', fn);
    google.maps.event.addDomListener(title, 'click', fn);
    speedTest.markers.push(marker);
    speedTest.map.addListener('click', function() {
    speedTest.map.set('scrollwheel', true);
});
speedTest.map.addListener('mouseout', function() {
    speedTest.map.set('scrollwheel', false);
});
  }
 
  window.setTimeout(speedTest.time, 0);
 
};

speedTest.markerClickFunction = function(pic, latlng) {
  return function(e) {
    e.cancelBubble = true;
    e.returnValue = false;
    if (e.stopPropagation) {
      e.stopPropagation();
      e.preventDefault();
    }
    var title = pic.photo_title;
	 var title2 = pic.photo_title2;
    var url = pic.photo_url;
    var fileurl = pic.photo_file_url;
	 var opis_distributera = pic.photo_opis_distributera;

    var infoHtml =
      '<a href="' + url + '" target="_blank"><img src="' +
      fileurl + '" style="max-width:200px;"/></a><div class="info"><h3>' + title2 +
      '</h3><div class="info-body"></div>';




    speedTest.infoWindow.setContent(infoHtml);
    speedTest.infoWindow.setPosition(latlng);
    speedTest.infoWindow.open(speedTest.map);
  };
};

speedTest.clear = function() {
  $('timetaken').innerHTML = 'cleaning...';
  for (var i = 0, marker; marker = speedTest.markers[i]; i++) {
    marker.setMap(null);
  }
};

speedTest.change = function() {
  speedTest.clear();
  speedTest.showMarkers();
};

speedTest.time = function() {
  $('timetaken').innerHTML = 'timing...';
  var start = new Date();
  if ($('usegmm').checked) {
    speedTest.markerClusterer = new MarkerClusterer(speedTest.map, speedTest.markers, {imagePath: '../images/m'});
  } else {
    for (var i = 0, marker; marker = speedTest.markers[i]; i++) {
      marker.setMap(speedTest.map);
    }
  }

  var end = new Date();
  $('timetaken').innerHTML = end - start;

};

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
       user = document.getElementById('help2').innerHTML;
       if (user != "" && user != null) {
           setCookie("clusterMapingZ", user, 30);
       }
}

