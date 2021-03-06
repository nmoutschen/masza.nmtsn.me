import masza from "./masza.json";
import world from "@/lib/world/index.js";

const KEYMAP = {
  32: "jump",
  37: "left",
  39: "right",
  40: "down",
  69: "action"
}

function detectCollisionWithTiles(masza, tiles) {

  var collidingItems = tiles.filter(tile => {
    return masza.collides(tile);
  })
  // When there are multiple colliding tiles, sort them based on the edge-to-edge distance.
  // Compared to a center point distance, this ensures that we are looking at the tile that
  // is colliding the most (as in, with the largest number of pixel) first. This prevents bugs
  // where Masza's position and force are altered by a tile that is further away from her
  // than another one.
  //
  // As we are only looking at tiles that are colliding with Masza, we compare the distance to
  // the same edge (left-to-left, top-to-top, etc.) rather than opposite edges, as one might do
  // if the objects were not colliding. Doing so prevents bugs where Masza is corner-to-corner to
  // an object, while on the edge of another one. In this case, the one on the edge should be
  // handled first, then the one on the edge, if necessary.
  .sort((a, b) => {
    return (
      Math.min(Math.pow(masza.box.left-b.box.left, 2), Math.pow(masza.box.right-b.box.right, 2)) + 
      Math.min(Math.pow(masza.box.top-b.box.top, 2), Math.pow(masza.box.bottom-b.box.bottom, 2)) -
      Math.min(Math.pow(masza.box.left-a.box.left, 2), Math.pow(masza.box.right-a.box.right, 2)) -
      Math.min(Math.pow(masza.box.top-a.box.top, 2), Math.pow(masza.box.bottom-a.box.bottom, 2))
    );
  });

  while(collidingItems.length > 0) {
    // Resolve collision for the closest tile first
    const tile = collidingItems.pop(0);

    // It's possible that resolving the collision for another tile solved the collision for this
    // tile too. Therefore, we first need to check if the tile still collides.
    if(!masza.collides(tile)) {
      continue;
    }

    // Calculate the vector representing the different between Masza's forward
    // pointing corner and the tile's backward pointing corner. These corners are
    // based on Masza's force.
    //
    // For example, if Masza's force vector is pointing left and upwards, we take
    // the bottom-right corner of the time substracted by the top-left corner for
    // Masza.
    //
    // This vector represents a rectangle. From there, we take the opposite vector
    // to Masza's force vector and find the intersection between the rectangle and
    const vector = {
      // Rightward force: Masza's right side, tile's left side
      // Leftward force: Masza's left side, tile's right side
      x: masza.force.x >= 0 ? tile.box.left - masza.box.right : tile.box.right - masza.box.left,
      // Downward force: Masza's bottom side, tile's top side
      // Upward force: Masza's top side, tile's bottom side
      y: masza.force.y >= 0 ? tile.box.top - masza.box.bottom : tile.box.bottom - masza.box.top
    };

    // Take the opposite of Masza's force vector to find the previous position, and
    // thus the intersection point between Masza and the tile based on her force vector.
    const force = {
      x: -masza.force.x,
      y: -masza.force.y
    };

    // If the ratio is higher horizontally, we use the horizontal ratio to calculate
    // the minimal movement needed to bring Masza out of the tile.
    const move = {
      x: Math.ceil(force.x/vector.x >= force.y/vector.y ? vector.x : force.x * (vector.y / force.y)),
      y: Math.ceil(force.x/vector.x >= force.y/vector.y ? force.y * (vector.x / force.x) : vector.y)
    }

    // Move only according to the strongest destination. This allows to slide across an tile
    // while pressed against it (e.g. jumping while pressing right while right to the left of
    // an tile).
    if(tile.physics == "block" && force.x/vector.x >= force.y/vector.y) {
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
}

function detectCollisionWithEnvironment(masza, game) {
  // The game world is a box and this checks if Masza is not outside one of
  // those boxes. If so, this pushes her back into the game world.

  // Horizontal detection
  // Right boundary
  if(masza.box.right > game.width) {
    masza.pos.x = game.width-masza.width/2;
    masza.force.x = 0;
  // Left boundary
  } else if(masza.box.left < 0) {
    masza.pos.x = masza.width/2;
    masza.force.x = 0;
  }

  // Vertical detection
  // Bottom boundary
  if(masza.box.bottom > game.height) {
    masza.pos.y = game.height;
    masza.force.y = 0;
    masza.jumping = false;
  // Top boundary
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

  // Flip the image based on left/right keys
  // This means that Masza could go left (positive force.x value) but would look
  // right as the right key is pressed.
  if(state.keys.left && !state.keys.right) {
    state.animation.flipped = true;
  } else if(!state.keys.left && state.keys.right) {
    state.animation.flipped = false;
  }
}

function updateForces(state) {
  // Update horizontal forces
  // Left movement
  if(state.keys.left && !state.keys.right) {
    state.force.x = Math.max(state.force.x-state.config.accel, -state.config.maxX);

  // Right movement
  } else if (!state.keys.left && state.keys.right) {
    state.force.x = Math.min(state.force.x+state.config.accel, state.config.maxX);

  // Not jumping and not moving
  } else if(!state.jumping) {
    // When lying down, Masza decelerates differently
    if(state.keys.down) {
      state.force.x = state.force.x > 0 ? Math.max(state.force.x-state.config.forcedDecel, 0) : Math.min(state.force.x+state.config.forcedDecel, 0);
    } else {
      state.force.x = state.force.x > 0 ? Math.max(state.force.x-state.config.decel, 0) : Math.min(state.force.x+state.config.decel, 0);
    }
  }

  // Update vertical forces
  // Jump key pressed but not jumping
  if(state.keys.jump && !state.jumping) {
    state.force.y = -state.config.jump;
    state.jumping = true;

  // Jumping and pressing down
  } else if(state.jumping && state.keys.down) {
    state.force.y = Math.min(state.force.y + state.config.forcedVertAccel, state.config.forcedMaxY);
  } else {
    state.force.y = Math.min(state.force.y + state.config.vertAccel, state.config.maxY);
  }

  // When in the air but not jumping, we grant a grace period before which Masza is
  // in the 'jumping' state.
  if(!state.jumping && state.force.y >= state.config.jumpGrace) {
    state.jumping = true;
  }
}

function parseMasza(masza) {
  return {
    width: masza.width,
    height: masza.height,
    sprite: masza.sprite,
    spriteImg: require(`./${masza.sprite.img}`),
    // Control Masza's animation mode
    animation: {
      type: masza.defaultAction,
      flipped: false,
      altFrame: false,
      // List of actions, used for animations
    actions: masza.actions,
    // List of action variants, used for animations
    variants: masza.variants,
    },

    // Position is loaded based on the game world during the setup action
    pos: {
      x: 0, y: 0
    },

    // Force is always initialized as (0, 0)
    force: {
      x: 0, y: 0
    },

    // Configuration parameters
    // These parameters configure aspects such as Masza's acceleration speed,
    // max speed, etc.
    config: {
      accel: masza.config.accel || 1,
      decel: masza.config.decel || 1,
      forcedDecel: masza.config.forcedDecel || 2,
      forcedMaxY: masza.config.forcedMaxY || 24,
      forcedVertAccel: masza.config.forcedVertAccel || 2,
      jump: masza.config.jump || 12,
      jumpGrace: masza.config.jumpGrace || 6,
      maxX: masza.config.maxX || 8,
      maxY: masza.config.maxY || 12,
      vertAccel: masza.config.vertAccel || 1
    },
    // Keys
    // These are set to true if currently pressed
    keys: {
      left: false,
      right: false,
      down: false,
      jump: false,
      action: false
    },

    // Check if Masza collides with an tile
    // Collision between Masza and an tile only applies if the tile has a 'block'
    // physics or 'top' physics and Masza was previously above the tile.
    //
    // In the case of 'block' physics, the tile cannot be traversed by Masza.
    // For 'top' physics, Masza can traverse the tile except when landing on top
    // of them.
    // For 'top' tiles, we take the previous known position (roughly equal to the
    // current position minus force) and check if the y coordinate is above the top
    // of the tile. We also check if the 'down' key is not pressed, as it allows to
    // pass through 'top' objects.
    collides(tile) {
      return (
        (
          tile.physics == "block" ||
          (tile.physics == "top" && this.pos.y - this.force.y <= tile.box.top && !this.keys.down)
        ) &&
        this.box.left < tile.box.right &&
        this.box.right > tile.box.left &&
        this.box.top < tile.box.bottom &&
        this.box.bottom > tile.box.top
      );
    },

    // Return a bounding box
    get box() {
      return {
        left: this.pos.x - this.width/2,
        right: this.pos.x + this.width/2,
        top: this.pos.y - this.height,
        bottom: this.pos.y
      }
    },

    // Generate the CSS style
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
        this.animation.variants !== undefined &&
        this.animation.variants.altFrame !== undefined
      ) {
        maszaStyle += actionStyle(this.animation.variants.altFrame);
      }

      // Parse the action
      if(
        this.animation.actions !== undefined &&
        this.animation.actions[this.animation.type] !== undefined
      ) {
        maszaStyle += actionStyle(this.animation.actions[this.animation.type]);
      }

      // Flip the image if necessary
      if(this.animation.flipped) {
        maszaStyle += "-moz-transform: scaleX(-1);-o-transform: scaleX(-1);-webkit-transform: scaleX(-1);transform: scaleX(-1);";
      }
      return maszaStyle;
    }
  }
}

// Set the CSS style based on Masza's JSON config file
// As Masza is made of a single PNG sprite, this displaces the background
// position to match the coordinates of the action.
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
  mutations: {
    // Key has been pressed
    keyDown(state, key) {
      if(KEYMAP[key] !== undefined) {
        state.keys[KEYMAP[key]] = true;
      }
    },
    // Key is no longer pressed
    keyUp(state, key) {
      if(KEYMAP[key] !== undefined) {
        state.keys[KEYMAP[key]] = false;
      }
    },
    nextPhysicsTick(state) {
      // Move
      move(state);

      // Collision
      detectCollisionWithEnvironment(state, world);
      detectCollisionWithTiles(state, world.tilesWithin(state.box));

      // Update forces
      updateForces(state);
    },
    nextGraphicsTick(state) {
      // Change animation to alternative frame
      state.animation.altFrame = !state.animation.altFrame;

      // Set the right animation
      setAnimation(state);
    },
  },
  actions: {
    // Set the initial position based on the game configuration.
    setup({ state }) {
      state.pos.x = world.start.x || state.width/2;
      state.pos.y = world.start.y || state.height;
    }
  }
}