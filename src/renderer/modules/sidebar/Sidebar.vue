<template>
  <div :class="$style.root">
    <div :class="[$style.cell, $style.top]">
      <sk-projects-button/>
      <sk-gameobjects-button/>
      <sk-performance-button/>
      <sk-resources-button/>
      <sk-tasks-button/>
    </div>
    <div :class="[$style.cell, $style.middle]">
      
    </div>
    <div :class="[$style.cell, $style.bottom]">
      <sk-settings-button/>
    </div>
  </div>
</template>


<script>
  import ProjectsButton from './components/ProjectsButton'
  import GameObjectsButton from './components/GameObjectsButton'
  import PerformanceButton from './components/PerformanceButton'
  import ResourcesButton from './components/ResourcesButton'
  import TasksButton from './components/TasksButton'
  import SettingsButton from './components/SettingsButton'

  export default {
    name: 'sk-sidebar',
    components: {
      'sk-projects-button': ProjectsButton,
      'sk-gameobjects-button': GameObjectsButton,
      'sk-performance-button': PerformanceButton,
      'sk-resources-button': ResourcesButton,
      'sk-tasks-button': TasksButton,
      'sk-settings-button': SettingsButton,
    }
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: $COLOR_UI_3;
    // padding: 5px 0;
    color: white;
  }

  .cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .top {
    justify-content: flex-start;
  }

  .middle {
    flex-grow: 1;
    justify-content: center;
  }

  .bottom {
    justify-content: flex-end;
  }
</style>