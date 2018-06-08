<template>
  <div :class="$style.root">
    <div>
      Signals:
      
      <ul>
        <li v-for="(value, key) in signals" :key="key">
          <sk-signal-object-summary
            :name="key"
            :calls="value.calls"
            :listeners="value.listeners"
            :enabled="value.enabled" />
        </li>
      </ul>
    </div>

    <div>
      Managers:
      
      <ul>
        <li v-for="(value, key) in managers" :key="key">
          <sk-manager-object-summary
            :name="key"
            :enabled="value.enabled" />
        </li>
      </ul>
    </div>

    <div>
      Services:
      
      <ul>
        <li v-for="(value, key) in services" :key="key">
          <sk-service-object-summary
            :name="key" />
        </li>
      </ul>
    </div>

    <div>
      Views:
      
      <ul>
        <li v-for="(value, key) in views" :key="key">
          <sk-view-object-summary
            :name="key" />
        </li>
      </ul>
    </div>


    <div>
      Providers:
      
      <ul>
        <li v-for="(value, key) in providers" :key="key">
          <sk-provider-object-summary
            :name="key" />
        </li>
      </ul>
    </div>

    <div>
      Factories:
      
      <ul>
        <li v-for="(value, key) in factories" :key="key">
          <sk-factory-object-summary
            :name="key" />
        </li>
      </ul>
    </div>

    <div>
      Instances:
      
      <ul>
        <li v-for="(value, key) in instances" :key="key">
          <sk-instance-object-summary
            :name="key" />
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
  import GameService from '@/common/services/GameService'
  import SignalObjectSummary from '@/common/components/summaries/SignalObject'
  import ManagerObjectSummary from '@/common/components/summaries/ManagerObject'
  import ServiceObjectSummary from '@/common/components/summaries/ServiceObject'
  import ViewObjectSummary from '@/common/components/summaries/ViewObject'
  import InstanceObjectSummary from '@/common/components/summaries/InstanceObject'
  import ProviderObjectSummary from '@/common/components/summaries/ProviderObject'
  import FactoryObjectSummary from '@/common/components/summaries/FactoryObject'

  export default {
    name: 'sk-projects-objects',

    components: {
      'sk-signal-object-summary': SignalObjectSummary,
      'sk-manager-object-summary': ManagerObjectSummary,
      'sk-service-object-summary': ServiceObjectSummary,
      'sk-view-object-summary': ViewObjectSummary,
      'sk-instance-object-summary': InstanceObjectSummary,
      'sk-provider-object-summary': ProviderObjectSummary,
      'sk-factory-object-summary': FactoryObjectSummary,
    },

    data: function() {
      return {
        timer: null,

        signals: {},
        managers: {},
        services: {},
        views: {},
        instances: {},
        providers: {},
        factories: {}
      }
    },

    computed: {
      list: function() {
        console.log(Object.keys(this.signals))
        return Object.keys(this.signals)
      }
    },

    created: function() {
      this.timer = setInterval(() => this.update(), 500)
    },

    beforeDestroy: function() {
      clearInterval(this.timer)
    },

    methods: {
      update: function() {
        if (!window.sk) return

        GameService.updateSignals(this)
        GameService.updateManagers(this)
        GameService.updateServices(this)
        GameService.updateViews(this)
        GameService.updateProviders(this)
        GameService.updateFactories(this)
        GameService.updateInstances(this)
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