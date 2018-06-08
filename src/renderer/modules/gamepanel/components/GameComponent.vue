<template>
  <div :id="hash" :class="$style.root" ref="game-container">
    game here c: {{hash}}
  </div>
</template>


<script>
  const path = require('path')

  export default {
    name: 'sk-game-component',

    computed: {
      hash: function() {
        return this.$store.state.game.hash;
      },
    },


    mounted: function() {
      this.$options.reload = this.$options.reload.bind(this)
      this.$options.reload()
    },
    beforeDestroy: function() {
      if (window.sk) {
        window.sk.stop()
      }
    },
    updated: function() {
      this.$options.reload()
    },


    reload: function() {
      if (window.sk) {
        window.sk.destroy()
      }

      const parent = this.$refs['game-container']
      parent.innerHTML = ''

      let basePath = this.$store.state.project.path

      let skPath = `/home/capivara/Dev/skald/engine/build/dist/skald.js`
      let gamePath = `${basePath}/build/editor/game.js`

      const r = window.require
      delete r.cache[r.resolve(gamePath)]
      delete window.$main

      let sk = r(skPath)
      let game = r(gamePath)
      window.$main(parent)
    }
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";
  
  .root {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>