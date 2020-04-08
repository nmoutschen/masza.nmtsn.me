import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import camera from './camera.js';
import game from './game/index.js';
import masza from './masza.js';

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    keyUp({ commit }, key) {
      commit("keyUp", key);
    },
    keyDown({ commit }, key) {
      commit("keyDown", key);
    },
    nextTick({ commit, rootState }) {
      commit("nextTick", rootState);
    },
  },
  modules: {
    camera,
    game,
    masza
  }
})
