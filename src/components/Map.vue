// Load map data

<template>
    <div id="map"></div>
</template>

<script>
import mapGl from 'maplibre-gl';

export default {
  name: 'Map',
  props: {
    location: Object
  }, 
  mounted() {
      let context = this;

      let lat = context.location.lat, long = context.location.long;

      var map = new mapGl.Map({
          container: 'map', // container id
          style: `https://api.maptiler.com/maps/hybrid/style.json?key=${process.env.VUE_APP_MP_KEY}`, // style URL
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
