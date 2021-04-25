<template>
<div class="header">


  <MainNav/>

  <h1 class="nameHeader">The Rick and Morty API</h1>
  <p class="description">техническое задание для Горбатенко М.</p>


</div>
</template>

<script>

import MainNav from "./MainNav.vue";

export default {
  components: {
    MainNav
  }
}

</script>

<style scoped>

.header {
  padding-bottom: 100px;
  background: url('~@/assets/image/background-image.png');
  background-position: center 100%;
  background-repeat: no-repeat;
  background-size: 20%;
}

.nameHeader {
  font-size: 100px;
  font-weight: bold;
  text-align: center;
  margin: 0 50px;
}

.description {
  font-size: 30px;
  text-align: center;
  margin: 0 50px;
  margin-top: 20px;
}

</style>