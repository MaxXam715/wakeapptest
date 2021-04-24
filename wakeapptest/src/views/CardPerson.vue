<template>
<div class="person">

  <a href="/" class="back-link">← назад к списку</a>

  <p class="titlePage">Редактировать персонажа</p>
  
  <div class="card-item">

    <img class="img-person" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="">

    <div class="info-edit">

      <div class="block-label">
        <p class="title">Name</p>
        <input type="text" placeholder="input..." value="Rick Sanchez" class="input">
      </div>

      <div class="block-label">
        <p class="title">Alive</p>
        <select name="" id="" class="select">
          <option value="">none</option>
          <option value="">Alive</option>
          <option value="">Dead</option>
        </select>
      </div>

      <div class="block-label">
        <p class="title">Gender</p>
        <select name="" id="" class="select">
          <option value="">none</option>
          <option value="">Male</option>
          <option value="">Female</option>
        </select>
      </div>


      <div class="block-label">
        <p class="title">Species</p>
        <select name="" id="" class="select">
          <option value="">none</option>
          <option value="">Human</option>
          <option value="">Alien</option>
        </select>
      </div>

      <div class="block-label">
        <p class="title">Last known location</p>
        <input type="text" placeholder="input..." value="Earth (Replacement Dimension)" class="input">
      </div>

      <button class="btn-save-edit">Сохранить изменения</button>

    </div>
    
  </div>

</div>
</template>

<script>
export default {
name: "CardPerson"
}
</script>

<style scoped>

.person {
  padding: 100px;
  background: #24282F;
}

.back-link {
  color: rgba(255,255,255, 0.5);
  text-decoration: none;
}

.titlePage {
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  margin-top: 50px;
}

.back-link:hover {
  color: rgba(255,255,255, 0.7);
  text-decoration: underline;
}

.card-item {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 50px;
  margin-top: 50px;
}

.img-person {
  border-radius: 10px;
  width: 350px;
  height: 400px;
  object-fit: cover;
}

.block-label {
  margin-bottom: 30px;
}

.block-label .title {
  color: #9e9e9e;
}

.block-label .input,
.block-label .select {
  width: calc(100% - 40px);
  padding: 0 20px;
  height: 50px;
  background-color: rgba(255,255,255, 0.1);
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
}

.btn-save-edit {
  background-color: orange;
  border: none;
  font-size: 16px;
  color: #000;
  border-radius: 5px;
  padding: 15px 25px;
  cursor: pointer;
}

.btn-save-edit:hover {
  filter: brightness(85%);
}

</style>