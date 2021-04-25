import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state:()=> ({
        results:[],
        cards:[],
    }),

    actions:{
        async getPage(store,page){
            await new Promise(v=>setTimeout(v,1000));
            let response = await axios.get('https://rickandmortyapi.com/api/character/?page=' + page);
            store.state.results = response.data.results;
        },

    }
})
