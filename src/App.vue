<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
@import "./assets/colors.scss";

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
  background-color: $background;
  font-family: '7x5', monospace;
  color: $primary;
  font-size: 8px;
}

a {
  color: $primary;
}
</style>
