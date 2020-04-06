<template>
  <div id="app">
    <div id="game">
      <div id="masza" :class="masza.class" :style="maszaStyle"></div>
    </div>
    <p id="debug">pos({{ masza.pos.x }}, {{ masza.pos.y }})<br/>force({{ masza.force.x }}, {{ masza.force.y }})</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  computed: {
    maszaStyle() {
      return "top: " + this.masza.pos.y + "px; left: " + this.masza.pos.x + "px;";
    }
  },
  data: () => {
    return {
      config: {
        maxForce: 16,
        width: 512,
        height: 512,
      },
      frameCounter: 0,
      keys: {
        leftPressed: false,
        rightPressed: false,
        jumpPressed: false,
      },
      masza: {
        class: "",
        flipped: false,
        jumping: false,
        width: 32,
        height: 32,
        pos: {x: (512-32)/2, y: 512-32},
        force: {x: 0, y: 0}
      }
    };
  },
  methods: {
    keyDown(event) {
      switch(event.keyCode) {
        case 32: // Space
          this.keys.jumpPressed = true;
          break;
        case 37: // Left
          this.keys.leftPressed = true;
          break;
        case 39: // Right
          this.keys.rightPressed = true;
          break;
      }
    },
    keyUp(event) {
      switch(event.keyCode) {
        case 32: // Space
          this.keys.jumpPressed = false;
          break;
        case 37: // Left
          this.keys.leftPressed = false;
          break;
        case 39: // Right
          this.keys.rightPressed = false;
          break;
      }
    }
  },
  created() {
    window.addEventListener('keydown', this.keyDown, false);
    window.addEventListener('keyup', this.keyUp, false);
  },
  destroyed() {
    window.removeEventListener('keydown', this.keyDown);
    window.removeEventListener('keyup', this.keyUp);
  },
  mounted: function() {
    // Animation loop
    const c = this;
    setInterval(() => {
      c.frameCounter = (c.frameCounter+1) % 20;

      // Keys
      if(c.keys.leftPressed) {
        c.masza.force.x = Math.max(c.masza.force.x-2, -c.config.maxForce);
        c.masza.flipped = true;
      }
      if(c.keys.rightPressed) {
        c.masza.force.x = Math.min(c.masza.force.x+2, c.config.maxForce);
        c.masza.flipped = false;
      }
      if(!c.masza.jumping && c.keys.jumpPressed) {
        c.masza.force.y = -c.config.maxForce;
        c.masza.jumping = true;
      }

      // Move
      c.masza.pos.x += c.masza.force.x;
      c.masza.pos.y += c.masza.force.y;
      if(c.masza.force.x < 0) {
        c.masza.force.x++;
      } else if(c.masza.force.x > 0) {
        c.masza.force.x--;
      }

      // Gravity
      c.masza.force.y++;

      // Box collision
      if(c.masza.pos.x > c.config.width-c.masza.width) {
        c.masza.pos.x = c.config.width-c.masza.width;
        c.masza.force.x = 0;
      } else if(c.masza.pos.x < 0) {
        c.masza.pos.x = 0;
        c.masza.force.x = 0;
      }
      if(c.masza.pos.y >= c.config.height-c.masza.height) {
        c.masza.pos.y = c.config.height-c.masza.height;
        c.masza.force.y = 0;
        c.masza.jumping = false;
      } else if(c.masza.pos.y < 0) {
        c.masza.pos.y = 0;
        c.masza.force.y = 0;
      }

      // Animation
      c.masza.class = "";
      if(c.masza.force.x != 0) {
        c.masza.class += " walk";
      }
      if(c.masza.flipped) {
        c.masza.class += " flip";
      }
      if(c.frameCounter % 10 > 5) {
        c.masza.class += " altFrame";
      }
    }, 50);
  },
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
  position: relative;
  width: 512px;
  margin: 0px auto;
}

#game {
  position: relative;
  width: 512px;
  height: 512px;
  border-bottom: 2px solid #fff;
}

#masza {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 32px;
  height: 32px;
  background-image: url("./assets/masza.png");
  background-size: 128px 64px;
  &.altFrame {
    background-position-y: 32px;
  }

  &.sit {
    background-position-x: 0px;
  }
  &.paw {
    background-position-x: 32px;
  }
  &.walk {
    background-position-x: 64px;
  }

  &.flip {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
}
</style>
