// Lagos >> lat = 6.465422 long = 3.406448
// New york >> {lat: 40.7128, long: 74.0060}
<template>
  <Navbar/>
  <Suspense>
    <section class="container">
      <TopBar :coords="coords" />
      <Map :location="coords"/>
      <WeatherData :location="coords"/>
    </section>
  </Suspense>
  
</template>

<script>
import Navbar from './components/Navbar.vue'
import TopBar from './components/TopBar.vue'
import WeatherData from './components/WeatherData.vue'
import Map from './components/Map.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    TopBar,
    WeatherData,
    Map
  },
  data(){
    return {
      coords: {lat: 40.730610, long: -73.935242}
    }
  }
}
</script>

<style>

  body, * {
    margin: 0;
  }

  .container {
    width: 860px;
    min-width: 860px;
    margin: 0 auto;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
