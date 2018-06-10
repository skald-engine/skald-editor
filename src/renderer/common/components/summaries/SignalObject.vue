<template>
  <div :class="$style.root">
    <span :class="$style.name">{{name}}</span>
    <span :class="$style.calls">{{calls}} calls</span>
    <span :class="$style.listeners">{{listeners}} listeners</span>
    <span :class="$style.enabled">{{enabled? 'enabled' : 'disabled'}}</span>
  </div>
</template>


<script>
  export default {
    name: 'sk-signal-object-summary',

    props: {
      name: String,
      listeners: Number,
      calls: Number,
      enabled: Boolean,
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

  .calls {
    font-size: 0.8em;
    opacity: 0.5;
    flex-grow: 0;
    flex-shrink: 0;
    min-width: 75px;
    text-align: right;
  }

  .listeners {
    font-size: 0.8em;
    opacity: 0.5;
    flex-grow: 0;
    flex-shrink: 0;
    min-width: 75px;
    text-align: right;
  }

  .enabled {
    font-size: 0.8em;
    opacity: 0.5;
    flex-grow: 0;
    flex-shrink: 0;
    min-width: 65px;
    text-align: right;
  }
</style>