<template>
  <div :class="$style.root">
    <sk-signal-object-summary
      v-if="type === 'signals'"
      :name="name"
      :calls="object.calls"
      :listeners="object.listeners"
      :enabled="object.enabled"/>

    <sk-manager-object-summary
      v-if="type === 'managers'"
      :name="name"
      :enabled="object.enabled"/>  

    <sk-service-object-summary
      v-if="type === 'services'"
      :name="name"
      :enabled="object.enabled"/>

    <sk-view-object-summary
      v-if="type === 'views'"
      :name="name"/>

    <sk-provider-object-summary
      v-if="type === 'providers'"
      :name="name"/>

    <sk-factory-object-summary
      v-if="type === 'factories'"
      :name="name"/>

    <sk-instance-object-summary
      v-if="type === 'instances'"
      :name="name"/>
  </div>
</template>


<script>
  import SignalObjectSummary from '@/common/components/summaries/SignalObject'
  import ManagerObjectSummary from '@/common/components/summaries/ManagerObject'
  import ServiceObjectSummary from '@/common/components/summaries/ServiceObject'
  import ViewObjectSummary from '@/common/components/summaries/ViewObject'
  import InstanceObjectSummary from '@/common/components/summaries/InstanceObject'
  import ProviderObjectSummary from '@/common/components/summaries/ProviderObject'
  import FactoryObjectSummary from '@/common/components/summaries/FactoryObject'

  export default {
    name: 'sk-generic-summary',

    props: {
      name: String,
      type: String,
      object: Object
    },
    
    components: {
      'sk-signal-object-summary': SignalObjectSummary,
      'sk-manager-object-summary': ManagerObjectSummary,
      'sk-service-object-summary': ServiceObjectSummary,
      'sk-view-object-summary': ViewObjectSummary,
      'sk-instance-object-summary': InstanceObjectSummary,
      'sk-provider-object-summary': ProviderObjectSummary,
      'sk-factory-object-summary': FactoryObjectSummary,
    },
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";
  
  .root {
    width: 100%;
    height: 100%;
  }
</style>