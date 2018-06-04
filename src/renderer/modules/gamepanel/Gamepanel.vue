<template>
  <div :class="$style.root">
    <sk-game-component/>
  </div>
</template>


<script>
  import GameComponent from './components/GameComponent'
  export default {
    name: 'sk-gamepanel',
    components: {
      'sk-game-component': GameComponent
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
    overflow: auto;
  }
</style>