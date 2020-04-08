function updatePosition(camera, game, masza) {
  // Move camera left
  if(
    masza.pos.x - camera.pos.x < camera.width/4 &&
    camera.pos.x > 0
  ) {
    camera.pos.x = Math.max(
      masza.pos.x - camera.width/4,
      0
    )
  // Move camera right
  } else if(
    masza.pos.x > camera.pos.x + camera.width - camera.width/4 &&
    camera.pos.x < game.width - camera.width
  ) {
    camera.pos.x = Math.min(
      masza.pos.x - camera.width + camera.width/4,
      game.width - camera.width
    )
  }

  // Move camera up
  if(
    masza.pos.y - camera.pos.y < camera.height/4 &&
    camera.pos.y > 0
  ) {
    camera.pos.y = Math.max(
      masza.pos.y - camera.height/4,
      0
    )
  // Move camera down
  } else if(
    masza.pos.y > camera.pos.y + camera.height - camera.height/4 &&
    camera.pos.y < game.height - camera.height
  ) {
    camera.pos.y = Math.min(
      masza.pos.y - camera.height + camera.height/4,
      game.height - camera.height
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