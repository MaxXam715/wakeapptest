<template>
  <div id="app">

    <!-- Header -->
    <MainHeader/>

    <router-view/>

  </div>
</template>

<script>

// Стили
import '@/assets/style/main.css';

import MainHeader from './components/MainHeader.vue'

export default {

  components: {
    MainHeader
  }

}
</script>



<style scoped>

</style>
