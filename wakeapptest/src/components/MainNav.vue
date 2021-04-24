<template>
<nav>

  <a href="https://wakeapp.ru/" target="_blank" class="wakeAppLogo">
    <img src="@/assets/image/wakeApp-logo.svg" alt="">
  </a>

  <a href="https://rickandmortyapi.com/api/character/" target="_blank" class="linkApi">Link API</a>

</nav>
</template>

<script>
export default {
  name: "MainNav"
}
</script>

<style scoped>

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 100px;
}

.wakeAppLogo img {
  width: 100%;
  height: auto;
  object-fit: contain;
  max-width: 200px;
}

.linkApi {
  padding: 10px 20px;
  color: #000;
  text-decoration: none;
  font-size: 14px;
  border: 1px solid #000;
  border-radius: 5px;
}

</style>