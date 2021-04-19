// Display weather data

<template>
 
  <div class="data-panels-frame">
    
    
    <div class="data-panel">
        <p class="data-type">temperature</p>
        <h4 class="data-value">{{locationData.main.temp}}<span class="data-unit">F</span></h4>
        <!-- <p class="data-excerpt">Varius vel ut nunc id in euismod. Viverra.</p> -->
    </div>

    <div class="data-panel">
        <p class="data-type">humidity</p>
        <h4 class="data-value">{{locationData.main.humidity}}<span class="data-unit">%</span></h4>
        <!-- <p class="data-excerpt">Varius vel ut nunc id in euismod. Viverra.</p> -->
    </div>

    <div class="data-panel">
        <p class="data-type">wind</p>
        <h4 class="data-value">{{locationData.wind.speed}}<span class="data-unit">{{locationData.wind.deg}}</span></h4>
        <!-- <p class="data-excerpt">Varius vel ut nunc id in euismod. Viverra.</p> -->
    </div>

    <!-- <div class="data-panel">
        <p class="data-type">soil</p>
        <h4 class="data-value">{{null}}<span class="data-unit">{{null}}</span></h4>
        <p class="data-excerpt">Varius vel ut nunc id in euismod. Viverra.</p>
    </div>   

    <div class="data-panel">
        <p class="data-type">precipitation</p>
        <h4 class="data-value">{{null}}<span class="data-unit"></span></h4>
        <p class="data-excerpt">Varius vel ut nunc id in euismod. Viverra.</p>
    </div>   

    <div class="data-panel">
        <p class="data-type">sunshine</p>
        <h4 class="data-value">{{null}}<span class="data-unit"></span></h4>
        <p class="data-excerpt">Varius vel ut nunc id in euismod. Viverra.</p>
    </div>     -->
  </div>
</template>

<script>
import useLocation from "../modules/location"
export default {
  name: 'WeatherData',
  async setup() {
    const {locationData, error, load}  = useLocation();

    await load(51.5074, 0.1278);

    return {locationData, error};
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .data-panels-frame {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        
    }
    .data-panel {
        text-align: left;
        padding: 24px;
        background: #F5F5F5;
        border: 0.5px solid #C2C2C2;
        box-shadow: 0px 2px 8px rgba(20, 21, 21, 0.08);
        border-radius: 8px;
        width: 26%;
        margin-bottom: 2em;
    }

    .data-type {
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #6C6C6C;
    }

    .data-value {
        font-weight: 500;
        font-size: 54px;
        line-height: 65px;
        color: #142105;
        margin: 0px
    }

    .data-value span {
        font-size: 14px;
    }

    .data-excerpt {
        font-size: 18px;
        line-height: 22px;
        color: #6C6C6C;
    }
</style>
