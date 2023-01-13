// Create the map.
function initMap() {


    var x = document.getElementById("demo");
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    
    
    function showPosition(position) {
  
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      console.log(lat);
      console.log(lng);
  
      var coords = {lat, lng}
  
      
  
        // Create the map.
        const map = new google.maps.Map(document.getElementById("map"), {
          center: coords,
          zoom: 12,
          mapId: "ef72aeb76528498e",
        });
        // Create the places service.
        const service = new google.maps.places.PlacesService(map);
        let getNextPage;
        const moreButton = document.getElementById("more");
      
        moreButton.onclick = function () {
          moreButton.disabled = true;
          if (getNextPage) {
            getNextPage();
          }
        };
        var request = {
            query: 'ABA',
            fields: ['name', 'geometry'],
          }
        // Perform a nearby search for LGBT friendly therapists.
        service.nearbySearch(
          { location: coords, radius: 1000000, keyword:"LGBT Therapy"},
          (results, status, pagination) => {
            if (status !== "OK" || !results) return;
      
            addPlaces(results, map);
            moreButton.disabled = !pagination || !pagination.hasNextPage;
            if (pagination && pagination.hasNextPage) {
              getNextPage = () => {
                // Note: nextPage will call the same handler function as the initial call
                pagination.nextPage();
              };
            }
          }
        );
      }
      
      function addPlaces(places, map) {
        const placesList = document.getElementById("places");
        // const image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        for (const place of places) {
          if (place.geometry && place.geometry.location) {
            const image = {
              anchor: new google.maps.Point(17, 34),
              fillColor: "blue",
              fillOpacity: 0.6,
              strokeWeight: 0,
              rotation: 0,
              scale: 2,
            };
      
            new google.maps.Marker({
              map,
              icon: image,
              fillColor: "blue",
              title: place.name,
              position: place.geometry.location,
              
            });
            
            const li = document.createElement("li");
      
            li.textContent = place.name;
            placesList.appendChild(li);
            li.addEventListener("click", () => {
              map.setCenter(place.geometry.location);
            });
          }
        }
      }
    }
      window.initMap= initMap;
      