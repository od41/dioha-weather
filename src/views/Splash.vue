<template>
    <div class="container">
        <img src="../assets/logo.png" alt="Dioha logo" class="logo"/>
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
            this.loadNext()
        }
    }
</script>

<style scoped>
    .container {
        background: #EEF676 url('../assets/splash-illustration.png');
        background-size: cover;
        width: 100%;
        height: 100vh;
    }

    .logo {
        width: 160px;
        margin-top: 8rem;
    }
</style>