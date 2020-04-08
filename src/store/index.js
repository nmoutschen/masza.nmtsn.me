import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import masza from './masza/index.js';
import Item from '../resources/item.js';

export default new Vuex.Store({
  state: {
    width: 1024,
    height: 512,
    camera: {
      width: 512,
      height: 512,
      pos: {
        x: 0,
        y: 0,
      }
    },
    items: [
      new Item("couch", 64, 32, {x: 32, y: 512}),
      new Item("dogBed", 32, 32, {x: 112, y: 512}, false),
      new Item("tvStand", 64, 32, {x: 160, y: 512}),
      new Item("tv", 64, 32, {x: 160, y: 480}),
      //new Item("ball", 32, 32, {x: 208, y: 512}),

      new Item("desk", 64, 32, {x: 256, y: 512}),
      new Item("deskTop", 64, 32, {x: 256, y: 480}, false),

      new Item("human1", 32, 64, {x: 336, y: 512}, false),
      new Item("human2", 32, 64, {x: 368, y: 512}, false),

      new Item("keys", 160, 32, {x: 256, y: 256+16}, false),
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
