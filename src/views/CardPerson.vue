<template>
<div class="person">

  <router-link :to="{name:'Index'}" class="back-link">← назад к списку</router-link>

  <p class="titlePage">Редактировать персонажа</p>
  
  <div v-if="inStore" class="card-item">

    <img v-if="image" class="img-person" :src="image" alt="">

    <div class="info-edit">

      <div class="block-label">
        <p class="title">Name</p>
        <input type="text" v-model="name" placeholder="input..." value="Rick Sanchez" class="input">
      </div>

      <div class="block-label">
        <p class="title">Alive</p>
        <select v-model="status" class="select">
          <option value="">none</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
        </select>
      </div>

      <div class="block-label">
        <p class="title">Gender</p>
        <select v-model="gender"  class="select">
          <option value="">none</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>


      <div class="block-label">
        <p class="title">Species</p>
        <select v-model="species"  class="select">
          <option value="">none</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
      </div>

      <div class="block-label">
        <p class="title">Last known location</p>
        <input v-model="location.name" placeholder="input..." value="Earth (Replacement Dimension)" class="input">
      </div>

      <button class="btn-save-edit" @click="saveChanges">Сохранить изменения</button>

    </div>
    
  </div>

</div>
</template>

<script>
export default {
name: "CardPerson",

  data(){
    return {
      inStore:false,
      name:'',
      image:'',
      status:'',
      gender:'',
      species:'',
      location:'',
    }
  },

  watch:{
    '$route.params.id'(id){
      this.getData(id)
    }
  },

  mounted() {
    this.getData(this.$route.params.id)
  },


  methods:{

    getData(id){
      let founded =  this.$store.state.cards.find(item=>item.id === id);

      this.inStore = !!founded;

      if(!this.inStore){
        this.$router.push({name:"Index"})
      }

      console.log(111, founded)

      let storeData = {...founded};

      this.name = storeData.name;
      this.image = storeData.image;
      this.status = storeData.status;
      this.gender = storeData.gender;
      this.species = storeData.species;
      this.location = storeData.location;
    },


    saveChanges(){
      let card = this.$store.state.cards.find(item=>item.id === this.$route.params.id);

      card.name = this.name;
      card.image = this.image;
      card.status = this.status;
      card.gender = this.gender;
      card.species = this.species;
      card.location = this.location;

      this.$router.push({name:"Index"})
    }
  }
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