import masza from "./masza.json";

function detectCollisionWithItems(state, items) {
  const box = {
    fromX: state.pos.x - state.width/2,
    toX: state.pos.x + state.width/2,
    fromY: state.pos.y - state.height,
    toY: state.pos.y
  }
  items.forEach(item => {
    const collisionBox = item.collisionBox;
    if(
      item.physics &&
      box.fromX < collisionBox.toX &&
      box.toX > collisionBox.fromX &&
      box.fromY < collisionBox.toY &&
      box.toY > collisionBox.fromY
    ) {
      var vector = {
        x: state.pos.x - item.pos.x,
        y: state.pos.y - item.pos.y
      }
      if(Math.abs(vector.x)/item.width > Math.abs(vector.y)/item.height) {
        if(vector.x > 0) {
          state.pos.x += (state.width+item.width)/2 - vector.x;
        } else {
          state.pos.x += - (state.width+item.width)/2 - vector.x;
        }
        state.force.x = 0;
      } else {
        if(vector.y > 0) {
          state.pos.y += (state.height+item.height)/2 - vector.y;
        } else {
          state.pos.y += - (state.height+item.height)/2 - vector.y;
        state.jumping = false;
        }
        state.force.y = 0;
      }
    }
  });
}

function detectCollisionWithEnvironment(state, game) {
  if(state.pos.x > game.width-state.width/2) {
    state.pos.x = game.width-state.width/2;
    state.force.x = 0;
  } else if(state.pos.x < state.width/2) {
    state.pos.x = state.width/2;
    state.force.x = 0;
  }
  if(state.pos.y >= game.height) {
    state.pos.y = game.height;
    state.force.y = 0;
    state.jumping = false;
  } else if(state.pos.y < state.height) {
    state.pos.y = state.height;
    state.force.y = 0;
  }
}

function move(state) {
  // Apply forces
  state.pos.x += state.force.x;
  state.pos.y += state.force.y;
}

function setAnimation(state) {
  // Which animation type to use
  if(state.jumping) {
    state.animation.type = "jumping";
  } else if(state.keys.left || state.keys.right) {
    state.animation.type = "walking";
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
  // Apply horizontal forces
  if(state.keys.left && !state.keys.right) {
    state.force.x = Math.max(state.force.x-2, -state.force.maxX);
  } else if (!state.keys.left && state.keys.right) {
    state.force.x = Math.min(state.force.x+2, state.force.maxX);
  } else if(state.force.x > 0 && !state.jumping) {
    state.force.x--;
  } else if(state.force.x < 0 && !state.jumping) {
    state.force.x++;
  }

  // Apply vertical forces
  if(state.keys.jump && !state.jumping) {
    state.force.y = -state.force.maxY;
    state.jumping = true;
  } else {
    state.force.y++;
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
      maxY: masza.force.maxY || 12
    },
    keys: {
      left: false,
      right: false,
      jump: false,
      action: false
    },
    actions: masza.actions,
    variants: masza.variants,
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
    maszaCollisionBox(state) {
      // Returns the (x, y) coordinates that form the collision box.
      return {
        fromX: state.pos.x - state.width/2,
        toX: state.pos.x + state.width/2,
        fromY: state.pos.y - state.height,
        toY: state.pos.y
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
      const box = getters.collisionBox;
      return (
        box.fromX < other.toX &&
        box.toX > other.fromX &&
        box.fromY < other.toY &&
        box.toY > other.fromY
      )
    }
  }
}