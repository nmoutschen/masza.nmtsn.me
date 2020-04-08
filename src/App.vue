<template>
  <div id="app">
    <Game/>
  </div>
</template>

<script>
import Game from "./components/Game.vue";

export default {
  name: 'App',
  components: {
    Game
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "7x5";
  src: url("./assets/font_7x5.ttf") format("truetype");
}

* {
  margin: 0px;
  padding: 0px;
  font-weight: 400;
}

body {
  background-color: #000;
  font-family: '7x5', monospace;
  color: #fff;
  font-size: 16px;
}

a {
  color: #fff;
}

#app {
}
</style>
