<template>
  <div :class="$style.root">
    {{name}} ({{calls}} calls)
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
  }
</style>