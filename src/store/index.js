import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import camera from './camera.js';
import game from './game/index.js';
import masza from './masza/index.js';

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
    nextGraphicsTick({ commit, rootState }) {
      commit("nextGraphicsTick", rootState);
    },
    nextPhysicsTick({ commit, rootState }) {
      commit("nextPhysicsTick", rootState);
    },
  },
  modules: {
    camera,
    game,
    masza
  }
})
