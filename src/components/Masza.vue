<template>
  <div id="masza" :class="maszaClass" :style="maszaStyle">
  </div>
</template>

<script>
export default {
  name: "Masza",
  computed: {
    maszaClass() {
      var maszaClass = this.$store.state.masza.animation.type;

      if(this.$store.state.masza.animation.flipped) {
        maszaClass += " flipped";
      }

      if(this.$store.state.masza.animation.altFrame) {
        maszaClass += " altFrame";
      }
      return maszaClass;
    },
    maszaStyle() {
      var maszaStyle = "";
      maszaStyle += "height: " + this.height + "px;";
      maszaStyle += "width: " + this.width +"px;";
      maszaStyle += "top: " + (this.$store.state.masza.pos.y-this.height) + "px;";
      maszaStyle += "left: " + (this.$store.state.masza.pos.x-(this.width/2)) + "px;";
      return maszaStyle;
    }
  },
  data() {
    return {
      width: 32,
      height: 32
    }
  }
}
</script>

<style lang="scss">
#masza {
  position: absolute;
  z-index: 1;
  background-image: url("../assets/masza.png");
  background-size: 128px 64px;
  &.altFrame {
    background-position-y: 32px;
  }

  &.sitting {
    background-position-x: 0px;
  }
  &.giving-paw {
    background-position-x: -32px;
  }
  &.walking {
    background-position-x: -64px;
  }
  &.jumping {
    background-position-x: -96px;
  }

  &.flipped {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
}
</style>