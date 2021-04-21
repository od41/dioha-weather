<template>
    <div class="container">
        <img src="../assets/logo-white.png" alt="Dioha logo" class="logo"/>
    </div>
</template>

<script>
    export default {
        methods: {
            loadNext() {
                // after timeout
                setTimeout(() => {
                    this.$router.push({name: 'InputLocation'})
                }, 2000); 
            }
        },
        mounted() {
            // this.loadNext()
        }
    }
</script>

<style scoped>
    .container {
        background: #20320A url('../assets/splash-illustration--2.png');
        background-size: cover;
        background-position: -10% 60%;
        width: 100%;
        height: 100vh;
    }

    .logo {
        width: 160px;
        margin-top: 8rem;
    }
</style>