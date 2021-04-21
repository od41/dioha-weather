<template>
  <Navbar />
     <Suspense>
        <section id="dashboard-container" class="container">
            <TopBar :coords="coords" />
            <Map :location="coords"/>
            <WeatherData :coords="coords"/>
        </section>
  </Suspense>
</template>

<script>
import TopBar from '../components/TopBar.vue'
import WeatherData from '../components/WeatherData.vue'
import Map from '../components/Map.vue'
import Navbar from '../components/Navbar.vue'

export default {
    name: 'Dashboard',
    components: {
        TopBar,
        WeatherData,
        Map,
        Navbar
    },
    data() {
        return {
            // lat: Number, // the latitude for a location
            // long: Number, // the longitude for a location
            coords: {}, // the latitude & longitude for a location
        }
    },
    created() {
        this.coords = this.$route.params
    },
}
</script>

<style scoped>
    #dashboard-container {
        margin-top: 6rem;
    }
</style>