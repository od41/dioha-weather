<template>
  <div class="frame-container">
    <div class="frame">
      <div class="frame-icon"><img src="../assets/location.png" /></div>
      <div class="frame-data">
        <p class="frame-title">Location</p>
        <p class="frame-value">{{locationData.name}}<span>{{locationData.sys.country}}</span></p>
      </div>
    </div>

    <div class="frame">
      <div class="frame-icon"><img src="../assets/date.png" /></div>
      <div class="frame-data">
        <p class="frame-title">Date</p>
        <p class="frame-value">{{monthNames[now.month] + ` ${now.day}`}}<span>{{`${now.year}`}}</span></p>
      </div>
    </div>

    <div class="frame">
      <div class="frame-icon"><img src="../assets/time.png" /></div>
      <div class="frame-data">
        <p class="frame-title">Time</p>
        <p class="frame-value">{{now.time}}<span>{{now.timeOfDay}}</span></p>
      </div>
    </div>
    
  </div>
</template>

<script>
import useLocation from "../modules/location"
export default {
  name: 'TopBar',
  async setup(props) {
    const {locationData, error, load} = useLocation();
    
    await load(props.coords.lat, props.coords.long)

    return {locationData, error}
  },
  props: {
    coords: Object, // the latitude and longitude for a location
  },
  data() {
    return {
      monthNames : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }
  },
  computed: {
    now() {
      let current = new Date();
      let day, month, year, hour, minute, time, localeTime;

      year = current.getFullYear()
      month = current.getMonth()
      day = current.getDate()

      localeTime = current.toLocaleTimeString();
      time = localeTime.substring(0, 5)

      const timeOfDay = localeTime.slice(-2);

      hour = current.getHours()
      minute = current.getMinutes()

      return {day: day, month: month, year: year, hour: hour, minute: minute, time: time, timeOfDay: timeOfDay}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .frame-container {
    display: flex;
    justify-content: space-around;
    background: #FFFFFF;
    border: 0.5px solid #EEEEEE;
    box-shadow: 0px 2px 8px rgba(9, 44, 17, 0.07);
    border-radius: 8px;
    margin-bottom: 24px;
  }

  .frame {
    display: flex;
    width:30%;
    padding: 28px 30px;

  }

  .frame-data {
    text-align: left;
    margin-left: 8px;
  }

  .frame-icon img{
    width: 18px;
  }

  .frame-title {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #6C6C6C;
    margin: 0;
  }

  .frame-value {
    font-size: 28px;
    line-height: 34px;
    color: #142105;
    margin: 0;
  }

  .frame-value span {
    margin-left: 8px;
    font-size: 18px;
    line-height: 22px;
    color: #142105;
  }
</style>
