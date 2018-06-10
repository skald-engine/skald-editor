<template>
  <div :class="$style.root">
    <span :class="$style.name">{{name}}</span>
    <span :class="$style.enabled">{{enabled? 'enabled' : 'disabled'}}</span>
  </div>
</template>


<script>
  export default {
    name: 'sk-manager-object-summary',

    props: {
      name: String,
      enabled: Boolean
    }
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";
  
  .root {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .name {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .enabled {
    font-size: 0.8em;
    opacity: 0.5;
    flex-grow: 0;
    flex-shrink: 0;
    text-align: right;
  }
</style>