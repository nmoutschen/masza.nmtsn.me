<template>
  <div id="game" :style="gameStyle">
    <div id="gameView" :style="gameViewStyle">
      <div :style="masza.style"></div>
      <div v-for="item in items" :key="item.id" :style="item.style" />
    </div>
    <p id="debug" v-if="devMode">
        pos({{ this.$store.state.masza.pos.x }}, {{ this.$store.state.masza.pos.y }})<br/>
        force({{ this.$store.state.masza.force.x }}, {{ this.$store.state.masza.force.y }})
      </p>
  </div>
</template>

<script>
function nextGraphicsTick(component) {
  component.$store.dispatch("nextGraphicsTick");
}
function nextPhysicsTick(component) {
  component.$store.dispatch("nextPhysicsTick");
}

export default {
  name: "Game",
  computed: {
    masza() {
      return this.$store.state.masza;
    },
    items() {
      return this.$store.state.game.itemsWithin(this.$store.state.camera.box);
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
      return this.$store.state.camera.style;
    }
  },
  data: () => {
    return {
      mainGraphicsLoop: null,
      mainPhysicsLoop: null
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
    this.mainGraphicsLoop = setInterval(() => {
      nextGraphicsTick(this);
    }, 120);
    this.mainPhysicsLoop = setInterval(() => {
      nextPhysicsTick(this);
    }, 30);
  },
  destroyed() {
    window.removeEventListener('keydown', this.keyDown);
    window.removeEventListener('keyup', this.keyUp);
    clearInterval(this.mainGraphicsLoop);
    clearInterval(this.mainPhysicsLoop);
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