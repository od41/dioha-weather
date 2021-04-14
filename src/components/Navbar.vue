<template>
  <div class="container">
    <div class="inner-container">
      <img class="logo" alt="dioha logo" src="../assets/logo.png">

      <div class="user-container">
        <span>Guest</span>
        <img src="../assets/user.png" />
      </div>
    </div>
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
    box-shadow: 0px 4px 12px rgba(9, 44, 17, 0.11);
    /* height: 116px; */
    margin-bottom: 24px;
    width: 100%;
  }

  .inner-container {
    display: flex;
    justify-content: center;
    position: relative;
    padding: 34px 0;
    width: 860px;
    min-width: 860px;
    margin: 0 auto;
    /* background: blue; */
  }

  .logo {
    height: 46px;
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
    top: 44px;
  }

  .user-container img{
    width: 28px;
    margin-left: 12px;
  }

  .user-container span{
    color: #142105;
  }

  .user-container:hover{
    cursor: pointer;
  }
</style>
