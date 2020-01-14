import Vue from 'vue';
import Vuex from 'vuex';
import VueAxios from 'vue-axios';
import axios from 'axios';
import mutations from '@/store/mutations.js';
import actions from '@/store/actions.js';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const state = {

    toilets: [],
    reviews:[]

   }



export default new Vuex.Store({

    state,
    
    mutations,
    actions

})
