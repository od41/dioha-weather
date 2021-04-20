<template>
    <div class="container">
        <form @submit.prevent="onSubmit" id="coords-form">
            <!-- <img src="../assets/logo.png" alt="Dioha logo" class="logo"/> -->
            <label for="lat">Latitude</label>
            <input id="lat" type="number" min=-90 max=90 step="any" placeholder="Latitiude" v-model="lat"  />
            <label for="long">Longitude</label>
            <input id="long" type="number" min=-180 max=180 step="any" placeholder="Longitude" v-model="long" />
            <button type="submit">Find Location</button>
        </form>
        
        <div class="overlay"></div>
    </div>
</template>

<script>
    export default {
        name: 'InputLocation',
        data() {
            return {
                lat: null,
                long: null
            }
        },
        methods: {
            onSubmit() {
                this.$router.push({name: 'Dashboard', params: {lat: this.lat, long: this.long}})
            }
        }
    }
</script>

<style scoped>
    .container {
        background: #EEF676 url('../assets/splash-illustration.png');
        background-size: cover;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
    }

    .overlay {
        background: #2C2D09;
        mix-blend-mode: multiply;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        width: 100%;
        height: 100vh;
    }

    .logo {
        width: 160px;
        margin-top: 8rem;
        align-self: center;
        margin-bottom: 2rem;
    }

    #coords-form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 30%;
        margin: 0 auto;
        z-index: 7;
    } 

    label {
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #6C6C6C;
        margin-bottom: .5rem;
    }

    input {
        padding: 12px 0;
        margin: 1.4rem 0;
        margin-top: 0;
        background: #E7FFF0;
        border: 1px solid #7FA25A;
        border-radius: 4px;
        color: #142105;
        font-size: 1rem;
        line-height: 24px;
        text-align: center;
        width: 100%;
    }

    input::placeholder {
        color: #CCC;
        letter-spacing: 0.2px;
    }

    button {
        background: #7FA25A;
        border-radius: 4px;
        border: 0;
        padding: 12px 0;
        margin: 2rem 0;
        font-size: 1.1rem;
        width: 100%;
        color: #fff;
    }
</style>