var myData = data;


//function to unhide image after click event
function showImage(){
        document.getElementById('img_1').style.visibility='visible';
        document.getElementById('img_2').style.visibility='visible';
        document.getElementById('img_3').style.visibility='visible';
        document.getElementById('img_4').style.visibility='visible';
        
    }



// ROCK - first festival content col
document.getElementById('button_rock').addEventListener('click', function() {
  
  document.getElementById("title_1").innerHTML = myData[0].Event;
  document.getElementById("text_1").innerHTML = myData[0].Place + " " + "," + myData[0].Country;
  document.getElementById("link_1").innerHTML = myData[0].URL;
  document.getElementById("img_1").src = myData[0].Image;

// ROCK - second festival content col

  document.getElementById("title_2").innerHTML = myData[1].Event;
  document.getElementById("text_2").innerHTML = myData[1].Place + " " + "," + myData[1].Country;
  document.getElementById("link_2").innerHTML = myData[1].URL;
  document.getElementById("img_2").src = myData[1].Image;
});

// POP - first festival content col
document.getElementById('button_pop').addEventListener('click', function() {
  
  document.getElementById("title_1").innerHTML = myData[2].Event;
  document.getElementById("text_1").innerHTML = myData[2].Place + " " + "," + myData[2].Country;
  document.getElementById("link_1").innerHTML = myData[2].URL;
  document.getElementById("img_1").src = myData[2].Image;

// POP - second festival content col

  document.getElementById("title_2").innerHTML = myData[3].Event;
  document.getElementById("text_2").innerHTML = myData[3].Place + " " + "," + myData[3].Country;
  document.getElementById("link_2").innerHTML = myData[3].URL;
  document.getElementById("img_2").src = myData[3].Image;
});








 
 
 
 
 // map section ------------------------------
 
 /*function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: {lat: -28.024, lng: 140.887}
        });

        // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
      var locations = [
        {lat: -31.563910, lng: 147.154312},
        {lat: -33.718234, lng: 150.363181},
        {lat: -33.727111, lng: 150.371124},
        {lat: -33.848588, lng: 151.209834},
        {lat: -33.851702, lng: 151.216968}
        
      ];*/
      
// end of map section
