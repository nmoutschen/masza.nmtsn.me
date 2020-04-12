<template>
  <div id="editor">
    <div id="tileset">
      <div class="tile" :for="tile in tileset.tiles" :key="tile.name">
        <div class="tileImg" :style="tile.style"></div>
      </div>
    </div>
    <div id="world"></div>
  </div>
</template>

<script>
import tileset from '@/lib/tileset/index.js';

export default {
  data() {
    tileset
  }
}
</script>

<style lang="scss">

</style>