<template>
   <div id="game">
      <Masza/>
      <Item v-for="item in items" :key="item.id" v-bind="item" />
      <p id="debug">
        pos({{ this.$store.state.masza.pos.x }}, {{ this.$store.state.masza.pos.y }})<br/>
        force({{ this.$store.state.masza.force.x }}, {{ this.$store.state.masza.force.y }})
      </p>
    </div>
</template>

<script>
import Item from "./Item.vue";
import Masza from "./Masza.vue";

function tick(component) {
  component.$store.dispatch("nextTick");
}

export default {
  name: "Game",
  components: {
    Item,
    Masza
  },
  computed: {
    items() {
      return this.$store.state.items;
    }
  },
  data: () => {
    return {
      mainLoop: null
    };
  },
  methods: {
    keyDown(event) {
      this.$store.dispatch("keyDown", event.keyCode);
    },
    keyUp(event) {
      this.$store.dispatch("keyUp", event.keyCode);
    }
  },
  created() {
    this.$store.dispatch("setup");
    window.addEventListener('keydown', this.keyDown, false);
    window.addEventListener('keyup', this.keyUp, false);
    this.mainLoop = setInterval(() => {
      tick(this);
    }, 25);
  },
  destroyed() {
    window.removeEventListener('keydown', this.keyDown);
    window.removeEventListener('keyup', this.keyUp);
    clearInterval(this.mainLoop);
  },
}
</script>

<style lang="scss">
#game {
  position: relative;
  width: 512px;
  height: 512px;
  border-bottom: 2px solid #fff;
}
</style>