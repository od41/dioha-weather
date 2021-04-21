// Lagos >> lat = 6.465422 long = 3.406448
// New york >> {lat: 40.7128, long: 74.0060}
<template>
  <!-- <Navbar /> -->
  
  <router-view />
  <!-- <Dashboard :coords="coords" /> -->
  
</template>

<script>
// import Dashboard from './views/Dashboard.vue'
// import Navbar from './components/Navbar.vue'


export default {
  name: 'App',
  components: {
    // Dashboard,
    // Navbar,
  },
  data(){
    return {
      coords: {lat: 40.730610, long: -73.935242}
    }
  }
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

  body, * {
    margin: 0;
  }

  /* cosmetic */

  body {
    background: #EFEFEF;
  }

  .container {
    width: 860px;
    min-width: 860px;
    margin: 0 auto;

  }
#app {
  font-family: 'Inter', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #142105;
  /* margin-top: 60px; */
}
</style>
