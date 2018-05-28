<template>
  <div :class="$style.root">
    <div :class="$style.grid">
      <div :class="[$style.panel, $style.frame]">
        <sk-frame/>
      </div>

      <div :class="[$style.panel, $style.sidebar]">
        <sk-sidebar/> 
      </div>

      <div :class="[$style.panel, $style.infobar]">
        <sk-infobar/>
      </div>

      <div :class="[$style.panel, $style.game]">
        <sk-game/>
      </div>

      <div :class="[$style.panel, $style.statusbar]">
        <sk-statusbar/>
      </div>
    </div>
  </div>
</template>


<script>
  import Frame from '@/modules/frame/Frame'
  import Statusbar from '@/modules/statusbar/Statusbar'
  import Sidebar from '@/modules/sidebar/Sidebar'
  import Infobar from '@/modules/infobar/Infobar'
  import Game from '@/modules/game/Game'

  export default {
    name: 'sk-main',
    components: {
      'sk-frame': Frame,
      'sk-statusbar': Statusbar,
      'sk-sidebar': Sidebar,
      'sk-infobar': Infobar,
      'sk-game': Game,
    }
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .grid {
    width: 100vw;
    height: 100vh;
    display: grid;
    align-items: stretch;
    grid-template-columns: $SIZE_SIDEBAR auto auto;
    grid-template-rows: $SIZE_FRAME auto $SIZE_STATUSBAR;
    grid-template-areas:
      "frame frame frame"
      "sidebar infobar game"
      "statusbar statusbar statusbar"
  }

  .panel {
    display: flex;
    align-items: center;

    & > div {
      width: 100%;
      height: 100%;
    }
  }

  .frame {
    grid-area: frame;
  }
  .sidebar {
    grid-area: sidebar;
  }
  .infobar {
    grid-area: infobar;
  }
  .game {
    grid-area: game;
  }
  .statusbar {
    grid-area: statusbar;
  }
</style>
