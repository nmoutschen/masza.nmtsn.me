import masza from "./masza.json";

function detectCollisionWithItems(masza, items) {
  items.forEach(item => {
    if(item.physics == "block" && masza.box.collides(item.box)) {
      if(masza.force.x == 0 && masza.force.y == 0) {
        masza.force.y = 1000;
      }
      // Calculate the vector representing the different between Masza's forward
      // pointing corner and the item's backward pointing corner. These corners are
      // based on Masza's force.
      //
      // For example, if Masza's force vector is pointing left and upwards, we take
      // the bottom-right corner of the time substracted by the top-left corner for
      // Masza.
      //
      // This vector represents a rectangle. From there, we take the opposite vector
      // to Masza's force vector and find the intersection between the rectangle and
      const vector = {
        // Rightward force: Masza's right side, item's left side
        // Leftward force: Masza's left side, item's right side
        x: masza.force.x >= 0 ? item.box.left - masza.box.right : item.box.right - masza.box.left,
        // Downward force: Masza's bottom side, item's top side
        // Upward force: Masza's top side, item's bottom side
        y: masza.force.y >= 0 ? item.box.top - masza.box.bottom : item.box.bottom - masza.box.top
      };

      // Take the opposite of Masza's force vector to find the previous position, and
      // thus the intersection point between Masza and the item based on her force vector.
      const force = {
        x: -masza.force.x,
        y: -masza.force.y
      };

      // If the ratio is higher horizontally, we use the horizontal ratio to calculate
      // the minimal movement needed to bring Masza out of the item.
      const move = {
        x: Math.ceil(force.x/vector.x >= force.y/vector.y ? vector.x : force.x * (vector.y / force.y)),
        y: Math.ceil(force.x/vector.x >= force.y/vector.y ? force.y * (vector.x / force.x) : vector.y)
      }

      // Move only according to the strongest destination. This allows to slide across an item
      // while pressed against it (e.g. jumping while pressing right while right to the left of
      // an item).
      if(force.x/vector.x >= force.y/vector.y) {
        masza.pos.x += move.x;
        masza.force.x = 0;
      } else {
        masza.pos.y += move.y;
        // If the y force is positive, Masza is coming from above, therefore this counts as a
        // ground collision and resets the jumping flag.
        if (masza.force.y > 0) {
          masza.jumping = false;
        }
        masza.force.y = 0;
      }
    }
  });
}

function detectCollisionWithEnvironment(masza, game) {
  if(masza.box.right > game.width) {
    masza.pos.x = game.width-masza.width/2;
    masza.force.x = 0;
  } else if(masza.box.left < 0) {
    masza.pos.x = masza.width/2;
    masza.force.x = 0;
  }
  if(masza.box.bottom > game.height) {
    masza.pos.y = game.height;
    masza.force.y = 0;
    masza.jumping = false;
  } else if(masza.box.top < 0) {
    masza.pos.y = masza.height;
    masza.force.y = 0;
  }
}

function move(masza) {
  // Apply forces
  masza.pos.x += masza.force.x;
  masza.pos.y += masza.force.y;
}

function setAnimation(state) {
  // Which animation type to use
  if(state.jumping) {
    state.animation.type = "jumping";
  } else if(state.keys.left || state.keys.right) {
    state.animation.type = "walking";
  } else if(state.keys.down) {
    state.animation.type = "lyingDown";
  } else if(state.keys.action) {
    state.animation.type = "givingPaw";
  } else {
    state.animation.type = "sitting";
  }

  // Flip the image if going left
  if(state.keys.left && !state.keys.right) {
    state.animation.flipped = true;
  } else if(!state.keys.left && state.keys.right) {
    state.animation.flipped = false;
  }
}

function updateForces(state) {
  // Update horizontal forces
  if(state.keys.left && !state.keys.right) {
    state.force.x = Math.max(state.force.x-2, -state.force.maxX);
  } else if (!state.keys.left && state.keys.right) {
    state.force.x = Math.min(state.force.x+2, state.force.maxX);
  } else if(state.force.x > 0 && !state.jumping) {
    state.force.x = Math.max(state.force.x-1, 0);
    if(state.keys.down && state.force.x > 0) {
      state.force.x = Math.max(state.force.x-1, 0);
    }
  } else if(state.force.x < 0 && !state.jumping) {
    state.force.x = Math.min(state.force.x+1, 0);
    if(state.keys.down && state.force.x < 0) {
      state.force.x = Math.min(state.force.x+1, 0);
    }
  }

  // Update vertical forces
  if(state.keys.jump && !state.jumping) {
    state.force.y = -state.force.jump;
    state.jumping = true;
  } else {
    state.force.y = Math.min(state.force.y+1, state.force.maxY);
  }
  if(!state.jumping && state.force.y >= state.force.jumpGrace) {
    state.jumping = true;
  }
  if(state.jumping && state.keys.down) {
    state.force.y = Math.min(state.force.y+1, state.force.maxY);
  }
}

function parseMasza(masza) {
  return {
    width: masza.width,
    height: masza.height,
    sprite: masza.sprite,
    spriteImg: require(`./${masza.sprite.img}`),
    frameCounter: 0,
    animation: {
      type: masza.defaultAction,
      flipped: false,
      altFrame: false
    },
    pos: {
      x: 0, y: 0
    },
    force: {
      x: 0,
      y: 0,
      maxX: masza.force.maxX || 8,
      maxY: masza.force.maxY || 12,
      jump: masza.force.jump || 12,
      jumpGrace: masza.force.jumpGrace || 6
    },
    keys: {
      left: false,
      right: false,
      down: false,
      jump: false,
      action: false
    },
    actions: masza.actions,
    variants: masza.variants,
    get box() {
      return {
        left: this.pos.x - this.width/2,
        right: this.pos.x + this.width/2,
        top: this.pos.y - this.height,
        bottom: this.pos.y,
        collides(other) {
          return (
            this.left < other.right &&
            this.right > other.left &&
            this.top < other.bottom &&
            this.bottom > other.top
          );
        }
      }
    },
    get style() {
      var maszaStyle = `
        position: absolute;
        z-index: 1;
        background-image: url("${this.spriteImg}");
        background-size: ${this.sprite.x}px ${this.sprite.y}px;
        height: ${this.height}px;
        width: ${this.width}px;
        top: ${this.pos.y - this.height}px;
        left: ${this.pos.x - this.width/2}px;
      `;
      // Parse the variant (e.g. alternative frame)
      if(
        this.animation.altFrame &&
        this.variants !== undefined &&
        this.variants.altFrame !== undefined
      ) {
        maszaStyle += actionStyle(this.variants.altFrame);
      }

      // Parse the action
      if(
        masza.actions !== undefined &&
        masza.actions[this.animation.type] !== undefined
      ) {
        maszaStyle += actionStyle(this.actions[this.animation.type]);
      }

      // Flip the image if necessary
      if(this.animation.flipped) {
        maszaStyle += "-moz-transform: scaleX(-1);-o-transform: scaleX(-1);-webkit-transform: scaleX(-1);transform: scaleX(-1);";
      }
      return maszaStyle;
    }
  }
}

function actionStyle(action) {
  var style = "";
  if(action.x !== undefined) {
    style += `background-position-x: ${-action.x}px;`
  }
  if(action.y !== undefined) {
    style += `background-position-y: ${-action.y}px;`
  }
  return style;
}

export default {
  state: parseMasza(masza),
  getters: {
    maszabox(state) {
      // Returns the (x, y) coordinates that form the collision box.
      return {
        left: state.pos.x - state.width/2,
        right: state.pos.x + state.width/2,
        top: state.pos.y - state.height,
        bottom: state.pos.y
      }
    },
    maszaStyle(state) {
      var maszaStyle = `
        position: absolute;
        z-index: 1;
        background-image: url("${state.spriteImg}");
        background-size: ${state.sprite.x}px ${state.sprite.y}px;
        height: ${state.height}px;
        width: ${state.width}px;
        top: ${state.pos.y - state.height}px;
        left: ${state.pos.x - state.width/2}px;
      `;
      // Parse the variant (e.g. alternative frame)
      if(
        state.animation.altFrame &&
        state.variants !== undefined &&
        state.variants.altFrame !== undefined
      ) {
        maszaStyle += actionStyle(state.variants.altFrame);
      }

      // Parse the action
      if(
        masza.actions !== undefined &&
        masza.actions[state.animation.type] !== undefined
      ) {
        maszaStyle += actionStyle(state.actions[state.animation.type]);
      }

      // Flip the image if necessary
      if(state.animation.flipped) {
        maszaStyle += "-moz-transform: scaleX(-1);-o-transform: scaleX(-1);-webkit-transform: scaleX(-1);transform: scaleX(-1);";
      }
      return maszaStyle;
    }
  },
  mutations: {
    keyDown(state, key) {
      switch(key) {
        case 32: // Space
          state.keys.jump = true;
          break;
        case 37: // Left
          state.keys.left = true;
          break;
        case 39: // Right
          state.keys.right = true;
          break;
        case 40: // Down
          state.keys.down = true;
          break;
        case 69: // e
          state.keys.action = true;
          break;
      }
    },
    keyUp(state, key) {
      switch(key) {
        case 32: // Space
          state.keys.jump = false;
          break;
        case 37: // Left
          state.keys.left = false;
          break;
        case 39: // Right
          state.keys.right = false;
          break;
        case 40: // Down
          state.keys.down = false;
          break;
        case 69: // e
          state.keys.action = false;
          break;
      }
    },
    nextTick(state, rootState) {
      // Move 1 frame
      state.frameCounter = (state.frameCounter + 1) % 20;

      // Change animation to alternative frame
      state.animation.altFrame = (state.frameCounter % 10) > 5;

      // Set the right animation
      setAnimation(state);

      // Move
      move(state);

      // Collision
      detectCollisionWithEnvironment(state, rootState.game);
      detectCollisionWithItems(state, rootState.game.items);

      // Update forces
      updateForces(state);
    }
  },
  actions: {
    setup({ state, rootState }) {
      state.pos.x = 32;
      state.pos.y = rootState.game.height;
    },
    collides({ getters }, other) {
      const box = getters.box;
      return (
        box.left < other.right &&
        box.right > other.left &&
        box.top < other.bottom &&
        box.bottom > other.top
      )
    }
  }
}