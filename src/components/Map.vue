// Load map data

<template>
    <div id="map"></div>
</template>

<script>
import mapGl from 'maplibre-gl';

const apiKey = 'Nte20EWKr9O5D4B2ycve'
export default {
  name: 'Map',
  props: {
    location: Object
  }, 
  mounted() {
      //  var map = new mapGl.Map({
      //     container: 'map', // container id
      //     style: `https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`, // style URL
      //     center: [-74.5, 40], // starting position [lng, lat]
      //     zoom: 9 // starting zoom
      // });

      let context = this;

      let lat = context.location.lat, long = context.location.long;

      var map = new mapGl.Map({
          container: 'map', // container id
          style: `https://api.maptiler.com/maps/hybrid/style.json?key=${apiKey}`, // style URL
          center: [long, lat], // starting position [lng, lat]
          zoom: 9 // starting zoom
      });

      map.addControl(
        new mapGl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
        })
      )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
    /* background: #ccc url('../assets/map-static.png') no-repeat center center; */
    /* background-color: #ccc; */
    width: 100%;
    height: 50vh;
    border-radius: 8px;
    margin-bottom: 48px;
}

#map > div.mapboxgl-control-container {
  display: none;
  opacity: 0;
}

#map .mapboxgl-control-container {
  display: none;
  opacity: 0;
  visibility: hidden;
}
</style>
