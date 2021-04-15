import { ref } from 'vue';
export default function useLocation() {
    const error = ref(null);
    const locationData = ref(null);

    const load = async () => {
        const owKey = '96a48c318d68e56df958bd46acc529d2';
        const coords = { lat: 6.465422, long: 3.406448 }
        try {
            const locationResponse = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + coords.lat + '&lon=' + coords.long + '&appid=' + owKey);
            locationData.value = await locationResponse.json();
            // console.log(location.value)
        } catch (e) {
            error.value = e;
        }
    }

    return { locationData, error, load };
}