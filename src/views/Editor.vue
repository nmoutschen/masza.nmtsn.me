<template>
  <div id="editor">
    <div id="tileset">
      <div id="filterTile">
        <label for="filterTileField">Filter: </label>
        <input type="text" id="filterTileField" v-model="typeFilter"/>
      </div>
      <div class="tile tileEmpty"
        :class="{selected: isTypeSelected('null')}"
        data-name="null"
        v-on:click="typeClick"
      >
        <div class="tileName">(Empty)</div>
      </div>
      <div
        class="tile"
        :class="{selected:
        isTypeSelected(tile.name)}"
        v-for="tile in tileTypes"
        :key="tile.name"
        :data-name="tile.name"
        v-on:click="typeClick"
      >
        <div class="tileImg" :style="tile.style"></div> <div class="tileName">{{ tile.name }}</div>
      </div>
    </div>
    <div id="world">
      <div id="worldSettings">
        <p>
          <label for="worldWidth">Width: </label><input type="text" v-model="worldConfig.width" id="worldWidth"/> 
          <label for="worldHeight">Height: </label><input type="text" v-model="worldConfig.height" id="worldHeight"/> 
          Selected: {{typeSelected}}
          <a :href="worldConfigDownload" id="download" download="world.json">Download</a>
        </p>
      </div>
      <div id="worldMap" :style="worldMapStyle" v-on:click="worldMapClick">
        <div id="worldStart" :style="worldStartStyle"></div>
        <div :data-id="tile.id" class="tile" v-for="tile in world.tiles" :key="tile.id" :style="tile.style" v-on:click="tileClick"></div>
      </div>
    </div>
  </div>
</template>

<script>
import tileset from '@/lib/tileset/index.js';
import worldConfig from '@/lib/world/world.json';
import { parseWorld } from '@/lib/world/index.js';

export default {
  computed: {
    tileTypes() {
      var types = Object.values(this.tileset.tiles);
      return types.filter(tile => tile.name.includes(this.typeFilter));
    },
    worldConfigDownload() {
      return "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.worldConfig));
    },
    world() {
      return parseWorld(this.worldConfig);
    },
    worldStartStyle() {
      return `
        left: ${this.worldConfig.start.x * 32}px;
        top: ${this.worldConfig.start.y * 32}px;
      `;
    },
    worldMapStyle() {
      return `
        width: ${this.worldConfig.width * 32}px;
        height: ${this.worldConfig.height * 32}px;
      `;
    }
  },
  data() {
    return {
      typeSelected: "null",
      typeFilter: "",
      tileset,
      worldConfig
    }
  },
  methods: {
    typeClick(event) {
      this.typeSelected = event.target.dataset.name || event.target.parentNode.dataset.name;
    },
    isTypeSelected(name) {
      return name == this.typeSelected;
    },
    tileClick(event) {
      if(this.typeSelected == "null") {
        this.worldConfig.tiles.splice(event.target.dataset.id, 1);
      } else {
        this.worldConfig.tiles[event.target.dataset.id].type = this.typeSelected;
      }
    },
    worldMapClick(event) {
      if(this.typeSelected == "null" || event.target.id != "worldMap") {
        return;
      }

      var tile = {
        type: this.typeSelected,
        x: Math.floor(event.offsetX/32),
        y: Math.floor(event.offsetY/32)
      };
      this.worldConfig.tiles.push(tile)
    }
  }
}
</script>

<style lang="scss">
@import "../assets/colors.scss";

#editor {
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-flow: row nowrap;

  #tileset {
    width: 192px;
    height: 100vh;
    overflow: scroll;
    background-color: $background-dark;

    .tile {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      padding: 8px;

      &:hover {
        background-color: $background-darker;
      }

      &.selected {
        background-color: $background-darker;
      }

      .tileImg {
        background-color: $background;
      }
    }
  }

  #world {
    flex-grow: 1;
    height: 100vh;
    overflow: scroll;
    background-color: $background-dark;

    #download {
      color: $blue;
    }

    #worldStart {
      position: absolute;
      width: 32px;
      height: 32px;
      background-color: $green;
    }

    #worldMap {
      position: relative;
      background-color: $background;

      .tile:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }

  * {
    // Prevent smoothing edges in images.
    image-rendering: optimizeSpeed;
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: optimize-contrast;
    image-rendering: crisp-edges;
    image-rendering: pixelated;
    -ms-interpolation-mode: nearest-neighbor;
  }
}
</style>