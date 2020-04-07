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
      new Item("couch", 64, 32, {x: 32, y: 512}),
      new Item("tv", 64, 32, {x: 128, y: 480}),
      new Item("tvStand", 64, 32, {x: 128, y: 512}),
      new Item("ball", 32, 32, {x: 192-16, y: 512}),
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
