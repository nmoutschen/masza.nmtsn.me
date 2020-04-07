import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import masza from './masza/index.js';
import Item from '../resources/item.js';

export default new Vuex.Store({
  state: {
    width: 512,
    height: 512,
    items: [
      new Item("box", 32, 32, {x: 16, y: 512-32}),
      new Item("box", 32, 32, {x: 16, y: 512})
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    masza
  }
})
