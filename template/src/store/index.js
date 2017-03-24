import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

import hello from './modules/hello';

Vue.use(Vuex);

const state = {
  
};

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  modules: {
    hello,
  },
});
