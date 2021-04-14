// Load weather data
// temperature, humidity, wind, soil, precipitation, sunshine

// API = 96a48c318d68e56df958bd46acc529d2
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

<template>
  <!-- <h1>Weather data</h1>
    <ul>
        <li>{{location.lat}}</li>
        <li>{{location.long}}</li>
    </ul> -->

  <div class="data-panels-frame">
    
    
    <div class="data-panel">
        <p class="data-type">temperature</p>
        <h4 class="data-value">{{weather.main.temp}}<span class="data-unit">F</span></h4>
        <p class="data-excerpt">Varius vel ut nunc id in euismod. Viverra.</p>
    </div>

    <div class="data-panel">
        <p class="data-type">humidity</p>
        <h4 class="data-value">{{weather.main.humidity}}<span class="data-unit">%</span></h4>
        <p class="data-excerpt">Varius vel ut nunc id in euismod. Viverra.</p>
    </div>

    <div class="data-panel">
        <p class="data-type">wind</p>
        <h4 class="data-value">{{weather.wind.speed}}<span class="data-unit">{{weather.wind.deg}}</span></h4>
        <p class="data-excerpt">Varius vel ut nunc id in euismod. Viverra.</p>
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
// import useLocation from "../modules/location"
export default {
  name: 'WeatherData',
//   async setup() {
//     const {location, error, load}  = useLocation();

//     await load();

//     return {location, error};
//   },
  props: {
    type: String,
    // location: Object,
  },
  data() {
      return {
          weather: {
                "coord": {
                    "lon": 3.4064,
                    "lat": 6.4654
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "base": "stations",
                "main": {
                    "temp": 304.15,
                    "feels_like": 310.75,
                    "temp_min": 304.15,
                    "temp_max": 304.15,
                    "pressure": 1012,
                    "humidity": 70
                },
                "visibility": 10000,
                "wind": {
                    "speed": 2.57,
                    "deg": 270
                },
                "clouds": {
                    "all": 75
                },
                "dt": 1618392198,
                "sys": {
                    "type": 1,
                    "id": 1185,
                    "country": "NG",
                    "sunrise": 1618378721,
                    "sunset": 1618422848
                },
                "timezone": 3600,
                "id": 2332459,
                "name": "Lagos",
                "cod": 200
            },
          weather2: {}
      }
  },
  mounted() {
    //   const apiKey = '96a48c318d68e56df958bd46acc529d2';
    //   let a = this;
    //   console.log(a.location.lat + " " + a.location.long)
      
    //   fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + a.location.lat + '&lon=' + a.location.long + '&appid=' + apiKey)
    //     .then(res => res.json())
    //     .then(data => this.weather = data)
    //     .catch(err => console.log(err.message))

   
  }
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
