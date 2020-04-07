<template>
  <div class="box" :class="type" :style="boxStyle">
  </div>
</template>

<script>
export default {
  name: "Box",
  computed: {
    boxStyle() {
      var boxStyle = "";
      boxStyle += "height: " + this.height + "px;";
      boxStyle += "width: " + this.width + "px;";
      boxStyle += "top: " + (this.pos.y-this.height) + "px;";
      boxStyle += "left: " + (this.pos.x-(this.width/2)) + "px;";
      return boxStyle;
    }
  },
  props: {
    type: String,
    width: Number,
    height: Number,
    pos: {
      x: Number,
      y: Number
    }
  }
}
</script>

<style lang="scss">
.box {
  position: absolute;
  background-image: url("../assets/items.png");
  background-size: 128px 128px;
  &.couch {
    background-position: 0px 0px;
  }
  &.ball {
    background-position: -64px 0px;
  }
  &.dogBed {
    background-position: -96px 0px;  
  }

  &.tv {
    background-position: 0px -32px;
  }
  &.deskTop {
    background-position: -64px -32px;
  }

  &.tvStand {
    background-position: 0px -64px;
  }
  &.desk {
    background-position: -64px -64px;
  }


  &.keys {
    background-position: 0px -96px;
  }
}
</style>