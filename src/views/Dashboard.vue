<template>
     <Suspense>
        <section class="container">
            <TopBar :coords="coords" />
            <Map :location="coords"/>
            <WeatherData :location="coords"/>
        </section>
  </Suspense>
</template>

<script>
import TopBar from '../components/TopBar.vue'
import WeatherData from '../components/WeatherData.vue'
import Map from '../components/Map.vue'

export default {
    name: 'Dashboard',
    components: {
        TopBar,
        WeatherData,
        Map
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
        // console.log(this.$route.params.data)
        console.log(this.coords)
    },
}
</script>

<style scoped>
    .container {
        margin-top: 6rem;
    }
</style>