<template>
  <div :class="$style.root">
    <div :class="[$style.cell, $style.left]">
      <sk-menu/>
    </div>

    <div :class="[$style.cell, $style.middle]">
      
    </div>

    <div :class="[$style.cell, $style.right]">
      <sk-project-label/>  
      <sk-minimize-button/>  
      <sk-maximize-button/>  
      <sk-close-button/>  
    </div>
  </div>
</template>


<script>
  import Menu from '@/modules/frame/components/Menu';
  import ProjectLabel from '@/modules/frame/components/ProjectLabel';
  import MinimizeButton from '@/modules/frame/components/MinimizeButton';
  import MaximizeButton from '@/modules/frame/components/MaximizeButton';
  import CloseButton from '@/modules/frame/components/CloseButton';

  export default {
    name: 'sk-frame',
    components: {
      'sk-menu': Menu,
      'sk-project-label': ProjectLabel,
      'sk-minimize-button': MinimizeButton,
      'sk-maximize-button': MaximizeButton,
      'sk-close-button': CloseButton,
    }
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .root {
    -webkit-app-region: drag;

    display: flex;
    align-items: center;
    justify-content: center;
    background: $COLOR_UI_1;
    padding: 0 5px;
  }

  .cell {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .left {
    justify-content: flex-start;
  }

  .middle {
    flex-grow: 1;
    justify-content: center;
  }

  .right {
    justify-content: flex-end;

    & > * {
      margin-left: 5px;
    }
  }
</style>