import { ref } from 'vue';

export default function useLocation() {
    const error = ref(null);
    const locationData = ref(null);

    const load = async (lat, long) => {
        try {
            const locationResponse = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=' + process.env.VUE_APP_OW_KEY);
            locationData.value = await locationResponse.json();
            // console.log(location.value)
        } catch (e) {
            error.value = e;
        }
    }

    return { locationData, error, load };
}