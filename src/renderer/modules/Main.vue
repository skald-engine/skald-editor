<template>
  <sk-page>
    <div class="sk-grid">
      <div class="sk-grid-panel sk-menu">
        <main-menu></main-menu>
      </div>
      <div class="sk-grid-panel sk-info">
        <info-panel></info-panel>
      </div>
      <div class="sk-grid-panel sk-game">
        <game></game>
      </div>
    </div>
  </sk-page>
</template>

<script>
  import skPage from '@/common/components/skPage'
  import MainMenu from '@/modules/mainMenu/MainMenu'
  import InfoPanel from '@/modules/infoPanel/InfoPanel'
  import Game from '@/modules/game/Game'

  export default {
    name: 'sk-main',
    components: {
      skPage,
      MainMenu,
      InfoPanel,
      Game 
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import "@/style/index.scss";

  .sk-grid {
    height: 100%;
    display: flex;
    align-items: stretch;
  }

  .sk-grid-panel {
    display: inline-block;
  }

  .sk-menu {
    flex-grow: 0;
    flex-shrink: 0;
    width: $SIZE_MENU;
    z-index: 3;
    box-shadow: 1px 0px 5px 0px fade-out($COLOR_BLACK, 0.5);
  }
  .sk-info {
    flex-grow: 0;
    flex-shrink: 0;
    z-index: 2;
    width: $SIZE_INFO;
    box-shadow: 1px 0px 5px 0px fade-out($COLOR_BLACK, 0.5);
  }
  .sk-game {
    z-index: 1;
    flex-grow: 1;
    flex-shrink: 1;
  }
</style>
