const CAMERA_MARGIN = 128;


function updatePosition(camera, game, masza) {
  // Move camera left
  if(
    masza.pos.x - camera.pos.x < CAMERA_MARGIN &&
    camera.pos.x > 0
  ) {
    camera.pos.x = Math.max(
      masza.pos.x - CAMERA_MARGIN,
      0
    )
  // Move camera right
  } else if(
    masza.pos.x > camera.pos.x + camera.width - CAMERA_MARGIN &&
    camera.pos.x < game.width - camera.width
  ) {
    camera.pos.x = Math.min(
      masza.pos.x - camera.width + CAMERA_MARGIN,
      game.width - camera.width
    )
  }
}

export default {
  state: {
    width: 512,
    height: 512,
    pos: {
      x: 0,
      y: 0,
    }
  },
  mutations: {
    nextTick(state, rootState) {
      // Update camera position
      updatePosition(state, rootState.game, rootState.masza);
    }
  }
}