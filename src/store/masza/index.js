const MAX_FORCE_HORIZ = 8;
const FORCE_JUMP = 12;
const CAMERA_MARGIN = 128;

function detectCollisionWithItem(state, box, item) {
  if(
    item.physics &&
    box.fromX < item.collisionBox.toX &&
    box.toX > item.collisionBox.fromX &&
    box.fromY < item.collisionBox.toY &&
    box.toY > item.collisionBox.fromY
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
}

function detectCollisions(state, rootState) {
  // Environment collision
  if(state.pos.x > rootState.width-state.width/2) {
    state.pos.x = rootState.width-state.width/2;
    state.force.x = 0;
  } else if(state.pos.x < state.width/2) {
    state.pos.x = state.width/2;
    state.force.x = 0;
  }
  if(state.pos.y >= rootState.height) {
    state.pos.y = rootState.height;
    state.force.y = 0;
    state.jumping = false;
  } else if(state.pos.y < state.height) {
    state.pos.y = state.height;
    state.force.y = 0;
  }

  // Collision with items
  const box = {
    fromX: state.pos.x - state.width/2,
    toX: state.pos.x + state.width/2,
    fromY: state.pos.y - state.height,
    toY: state.pos.y
  }
  rootState.items.forEach(item => {
    detectCollisionWithItem(state, box, item);
  });
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
    state.animation.type = "giving-paw";
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

function updateCamera(state, rootState) {
  // Move camera left
  if(
    state.pos.x - rootState.camera.pos.x < CAMERA_MARGIN &&
    rootState.camera.pos.x > 0
  ) {
    rootState.camera.pos.x = Math.max(
      state.pos.x - CAMERA_MARGIN,
      0
    )
  // Move camera right
  } else if(
    state.pos.x > rootState.camera.pos.x + rootState.camera.width - CAMERA_MARGIN &&
    rootState.camera.pos.x < rootState.width - rootState.camera.width
  ) {
    rootState.camera.pos.x = Math.min(
      state.pos.x - rootState.camera.width + CAMERA_MARGIN,
      rootState.width - rootState.camera.width
    )
  }
}

function updateForces(state) {
  // Apply horizontal forces
  if(state.keys.left && !state.keys.right) {
    state.force.x = Math.max(state.force.x-2, -MAX_FORCE_HORIZ);
  } else if (!state.keys.left && state.keys.right) {
    state.force.x = Math.min(state.force.x+2, MAX_FORCE_HORIZ);
  } else if(state.force.x > 0 && !state.jumping) {
    state.force.x--;
  } else if(state.force.x < 0 && !state.jumping) {
    state.force.x++;
  }

  // Apply vertical forces
  if(state.keys.jump && !state.jumping) {
    state.force.y = -FORCE_JUMP;
    state.jumping = true;
  } else {
    state.force.y++;
  }
}

export default {
  state: {
    frameCounter: 0,
    jumping: false,
    animation: {
      type: "sitting",
      flipped: false,
      altFrame: false
    },
    width: 32,
    height: 32,
    pos: {
      x: 0,
      y: 0
    },
    force: {
      x: 0,
      y: 0
    },
    keys: {
      left: false,
      right: false,
      jump: false,
      action: false
    }
  },
  getters: {
    collisionBox(state) {
      // Returns the (x, y) coordinates that form the collision box.
      return {
        fromX: state.pos.x - state.width/2,
        toX: state.pos.x + state.width/2,
        fromY: state.pos.y - state.height,
        toY: state.pos.y
      }
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
      detectCollisions(state, rootState);

      // Update forces
      updateForces(state);

      // Update camera
      updateCamera(state, rootState);
    }
  },
  actions: {
    keyUp({ commit }, key) {
      commit("keyUp", key);
    },
    keyDown({ commit }, key) {
      commit("keyDown", key);
    },
    nextTick({ commit, rootState }) {
      commit("nextTick", rootState);
    },
    setup({ state, rootState }) {
      state.pos.x = 32;
      state.pos.y = rootState.height;
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