<template>
  <div class="container">
    <div class="inner-container">
      <router-link to="/" >
        <img class="logo" alt="dioha logo" src="../assets/logo.png">
      </router-link>
      <div class="user-container">
        <router-link to="/InputLocation">
          <button>New Location</button>
        </router-link>
      </div>
      <!-- <div class="user-container">
        <span>Guest</span>
        <img src="../assets/user.png" />
      </div> -->
    </div>
    <!-- <div><router-link to="/inputlocation">Input</router-link></div> -->
  </div>
  
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    background: #fff;
    border: 1px solid rgba(9, 44, 17, 0.11);
    /* box-shadow: 0px 4px 12px rgba(9, 44, 17, 0.11); */
    /* height: 116px; */
    margin-bottom: 24px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .inner-container {
    display: flex;
    justify-content: center;
    position: relative;
    padding: 14px 0;
    width: 860px;
    min-width: 860px;
    margin: 0 auto;
    /* background: blue; */
  }

  .logo {
    height: 40px;
    width: auto;
  }

  .logo:hover {
    cursor: pointer;
  }

  .user-container {
    display: flex;
    position: absolute;
    align-items: center;
    right: 0;
    top: 20px;
  }

  .user-container img{
    width: 20px;
    margin-left: 8px;
  }

  .user-container span{
    color: #142105;
    font-size: 0.9rem;
  }

  .user-container:hover{
    cursor: pointer;
  }

  button {
    background: #7FA25A;
    border-radius: 4px;
    border: 0;
    padding: 8px 16px;
    /* margin: 2rem 0; */
    font-size: 1rem;
    width: 100%;
    color: #fff;
    cursor: pointer;
    }
</style>
