<template>
  <div id="home">

    <p class="titleCountCharacter">Персонажей - {{ cards.length }}</p>

    <div class="block-action">
      <form action="" class="filter-box">

        <p class="title">Фильтр:</p>

        <div class="grid">
          <label for="all" @click="filter(null)">
            <input type="radio" value="value1" name="group2" id="all" checked>
            <p>All</p>
          </label>

          <label for="male" @click="filter('Male')">
            <input type="radio" value="value2" name="group2" id="male">
            <p>Only Male</p>
          </label>

          <label for="female" @click="filter('Female')">
            <input type="radio" value="value1" name="group2" id="female">
            <p>Only Female</p>
          </label>
        </div>

      </form>

      <form action="" class="filter-box">

        <p class="title">Сортировка:</p>

        <div class="grid">
          <label for="null-sort" @click="sorting(null)">
            <input type="radio" value="value1" name="group2" id="null-sort" checked>
            <p>All</p>
          </label>

          <label for="alphabetic" @click="sorting('alphabetic')">
            <input type="radio" value="value2" name="group2" id="alphabetic">
            <p>Alphabetic</p>
          </label>
        </div>

      </form>
    </div>

    <div v-if="loading" class="preloader">
      <img src="@/assets/image/emodji-1.png" alt="">
      <img src="@/assets/image/emodji-2.png" alt="">
      <img src="@/assets/image/emodji-3.png" alt="">
    </div>

    <div class="grid-character">

      <section>
        <div class="item" v-for="(card, index) in filteredCards || cards" :key="index">

          <div class="photoCharacter" :style="{'background-image': 'url(' + card.image + ')'}"></div>

          <div class="infoCharacter">

            <p class="idCharacter">id - {{ card.id }}</p>

            <div class="itemInfo_character">
              <a href="/card-person" class="nameCharacter">{{ card.name }}</a>
              <p class="aliveCharacter">Alive - {{ card.status }}</p>
            </div>

            <div class="itemInfo_character">
              <p class="title">gender:</p>
              <p class="FirstSeenCharacter">{{ card.gender }}</p>
            </div>

            <div class="itemInfo_character">
              <p class="title">Species:</p>
              <p class="locationCharacter">{{ card.species }}</p>
            </div>

            <div class="itemInfo_character">
              <p class="title">Last known location:</p>
              <p class="locationCharacter">{{ card.location.name }}</p>
            </div>

          </div>

          <div class="action-block">
            <a href="/card-person" class="edit" @click="edit(card)">Редактировать</a>
            <p class="remove" @click="deleteObject(index)">Удалить</p>
          </div>

        </div>
        <button class="addPerson" @click="addCard">Добавить персонажа </button>
      </section>


    </div>

  </div>
</template>

<script>

import axios from 'axios';

export default {

  data(){
    return {
      cards:[],
      filteredCards:null,

      results:[],
      loading:true,

      page:1
    }
  },

  async mounted(){
    this.getDataFromApi();
  },

  methods: {
    async getDataFromApi(){
      this.loading = true;

      await new Promise(v=>setTimeout(v,1000));

      let response = await axios.get('https://rickandmortyapi.com/api/character/?page=' + this.page);
      this.results = response.data.results;
      if(this.page===1){
        this.addCard();
      }
      this.loading = false;
    },

    filter(value){
      if(!value){
        return this.filteredCards = null;
      }

      this.filteredCards = this.cards.filter(({gender})=>gender === value)
    },

    sorting(value){
      if(!value){
        return this.filteredCards = null;
      }

      if(value === 'alphabetic') {
        this.filteredCards = [...(this.filteredCads || this.cards)].sort((a,b)=>{
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        })
      }


    },


    deleteObject: function(index) {
      this.$delete(this.cards, index);
    },

    edit(card){
      console.log(card);
      card.gender = 'Олое!!!'
    },


    addCard(){
      this.cards.push(this.results.shift());
      if(this.results.length === 0){
        this.page++;
        this.getDataFromApi();
      }
    }

  },

}

</script>

<style>

#home {
  padding: 100px;
  background: #24282F;
}

.preloader {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
}

.preloader img {
  width: 70px;
  height: auto;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-name: square;
}

@keyframes square {
  from {
    margin-right: 10px;
  }

  to {
    margin-right: 50px;
  }
}

.titleCountCharacter {
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 50px;
}

.block-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
}

.filter-box {
  background-color: rgba(255,255,255, 0.05);
  padding: 20px;
  color: #fff;
  border-radius: 5px;
  width: max-content;
}

.filter-box .title {
  margin-bottom: 10px;
  font-size: 20px;
  font-style: italic;
}

.filter-box .grid {
  display: flex;
}

.filter-box label {
  display: flex;
  margin-top: 10px;
  cursor: pointer;
}

.filter-box label p {
  margin-right: 20px;
}

.addPerson {
  width: 100%;
  min-height: 283px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 50px 100px;
  border: 3px dashed blue;
  border-radius: 10px;
  font-size: 25px;
  color: #fff;
  cursor: pointer;
}

.addPerson:active {
  background-color: rgba(255, 255, 255, 0.1);
}

.grid-character section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}

.grid-character .item {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  background-color: #3C3E44;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.2s;
}

.grid-character .item:hover .action-block {
  bottom: 0;
  opacity: 1;
}

.grid-character .item:hover {
  background-color: #50535B;
}

.idCharacter {
  position: absolute;
  top: 0;
  right: 0;
  text-align: right;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  color: rgba(255,255,255, 0.3);
}

.action-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  bottom: -60px;
  opacity: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  transition: all 0.2s;
}

.action-block a,
.action-block p {
  padding: 20px;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  border-bottom: 2px solid transparent;
}

.action-block .remove {
}

.action-block .remove:hover {
  border-bottom: 2px solid red;
  color: red;
}

.action-block .edit {
  border-right: 1px solid #fff;
}

.action-block .edit:hover {
  border-bottom: 2px solid orange;
  color: orange;
}

.photoCharacter {
  background-position: center;
  background-size: cover;
}

.infoCharacter {
  padding: 20px;
  color: #fff;
}

.itemInfo_character {
  margin-bottom: 20px;
}

.itemInfo_character p {
  margin-bottom: 5px;
}

.itemInfo_character:last-child {
  margin-bottom: 0;
}

.itemInfo_character .title {
  color: #9e9e9e;
}

.nameCharacter {
  display: flex;
  font-size: 27px;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 5px;
  color: #fff;
}

.nameCharacter:hover {
  color: orange;
}

.aliveCharacter {

}
.locationCharacter {

}
.FirstSeenCharacter {

}

</style>