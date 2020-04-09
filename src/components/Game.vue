<template>
  <div id="game" :style="gameStyle">
    <div id="gameView" :style="gameViewStyle">
      <Masza/>
      <Item v-for="item in items" :key="item.id" v-bind:item="item" />
    </div>
    <p id="debug" v-if="devMode">
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
      return this.$store.state.game.items;
    },
    devMode() {
      return process.env.NODE_ENV == "development"
    },
    gameStyle() {
      var style = "";
      style += "width: " + this.$store.state.camera.width + "px;";
      style += "height: " + this.$store.state.camera.height + "px;";
      return style;
    },
    gameViewStyle() {
      var style = "";
      style += "width: " + this.$store.state.camera.width + "px;";
      style += "height: " + this.$store.state.camera.height + "px;";
      style += "top: " + (-this.$store.state.camera.pos.y) + "px;";
      style += "left: " + (-this.$store.state.camera.pos.x) + "px;";
      return style;
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
  margin: 0px auto;
  border-bottom: 2px solid #fff;
  overflow: hidden;

  #gameView {
    position: absolute;
  }
}
</style>