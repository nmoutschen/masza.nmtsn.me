<template>
  <div class="box" :class="boxClass" :style="boxStyle">
  </div>
</template>

<script>
export default {
  name: "Box",
  computed: {
    boxStyle() {
      var boxStyle = "";
      boxStyle += "height: " + this.height + "px;";
      boxStyle += "width: " + this.width +"px;";
      boxStyle += "top: " + (this.pos.y-this.height) + "px;";
      boxStyle += "left: " + (this.pos.x-(this.width/2)) + "px;";
      return boxStyle;
    },
    boxClass() {
      var boxClass = "";
      if(this.active) {
        boxClass += " active";
      }
      return boxClass
    }
  },
  data() {
    return {
      width: 32,
      height: 32
    }
  },
  props: {
    pos: {
      x: Number,
      y: Number
    },
    type: String
  }
}
</script>

<style lang="scss">
.box {
  position: absolute;
  background-color: #44f;

  &.active {
    background-color: #f00;
  }
}
</style>