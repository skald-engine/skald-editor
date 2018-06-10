<template>
  <div :class="$style.root">
    <sk-projects-view v-show="selected === 'projects'"/>
    <sk-objects-view v-show="selected === 'objects'"/>
    <sk-resources-view v-show="selected === 'resources'"/>
    <sk-display-view v-show="selected === 'display'"/>
    <sk-settings-view v-show="selected === 'settings'"/>
  </div>
</template>


<script>
  import ProjectsView from '@/modules/infopanel/views/ProjectsView';
  import ObjectsView from '@/modules/infopanel/views/ObjectsView';
  import ResourcesView from '@/modules/infopanel/views/ResourcesView';
  import DisplayView from '@/modules/infopanel/views/DisplayView';
  import SettingsView from '@/modules/infopanel/views/SettingsView';

  export default {
    name: 'sk-infopanel',
    components: {
      'sk-projects-view': ProjectsView,
      'sk-objects-view': ObjectsView,
      'sk-resources-view': ResourcesView,
      'sk-display-view': DisplayView,
      'sk-settings-view': SettingsView,
    },
    computed: {
      selected: function() {
        return this.$store.state.gui.menubar.selected
      }
    }
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";
  
  .root {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
</style>