<template>
  <div :class="$style.root">
    <div :class="['sk-panel', $style.filterContainer]">
      <div :class="$style.filterType">
        <select class="sk-input"
                v-model="categoryFilter">
          <option value="all">All</option>
          <option v-for="category in categories"
                  :value="category">{{category}}</option>
        </select>
      </div>

      <div :class="$style.filterName">
        <input type="text"
               class="sk-input"
               placeholder="FILTER BY NAME"
               v-model="nameFilter">
      </div>
    </div>

    <div :class="$style.listContainer">
      <div :class="$style.listContent">
        <div v-for="(objectList, objectCategory) in objects"
             v-if="Object.keys(objectList).length"
             :key="objectCategory">
          <h2 class="sk-info-section">{{objectCategory}}</h2>

          <ul class="sk-info-list">
            <li v-for="(objectItem, objectKey) in objectList" :key="objectKey">
              <sk-generic-summary
                :name="objectKey"
                :type="objectCategory"
                :object="objectItem"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import GameService from '@/common/services/GameService'
  import GenericSummary from '@/common/components/GenericSummary'

  export default {
    name: 'sk-projects-objects',

    components: {
      'sk-generic-summary': GenericSummary,
    },

    data: function() {
      return {
        timer: null,
        categoryFilter: 'all',
        nameFilter: '',

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
      categories: function() {
        let keys = [
          'signals',
          'managers',
          'services',
          'views',
          'instances',
          'providers',
          'factories'
        ]
        return keys.filter(x => Object.keys(this[x]).length)
      },

      objects: function() {
        let categoryFilter = this.categoryFilter
        let nameFilter = this.nameFilter

        if (categoryFilter === 'all' && nameFilter === '') {
          return {
            signals: this.signals,
            managers: this.managers,
            services: this.services,
            views: this.views,
            instances: this.instances,
            providers: this.providers,
            factories: this.factories
          }
        }

        if (categoryFilter !== 'all' && nameFilter === '') {
          return {
            [categoryFilter]: this[categoryFilter]
          }
        }

        let categories = this.categories
        let objects = {}
        categories.forEach(category => {
          if (categoryFilter !== 'all' && categoryFilter !== category) {
            return
          }

          let currentObjects = {}
          let items = this[category]
          let keys = Object.keys(items)
          let compare = nameFilter.toUpperCase()
          keys = keys.filter(key => key.toUpperCase().includes(compare))
          keys.forEach(key => {
            currentObjects[key] = items[key]
          })

          if (keys.length) {
            objects[category] = currentObjects
          }
        })

        return objects
      },
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
    display: flex;
    flex-direction: column;
  }

  .filterContainer {
    flex-grow: 0;
    flex-shrink: 0;
    height: 50px;
    display: flex;
    margin-bottom: 15px;
  }

  .filterType {
    flex-grow: 0;
    flex-shrink: 0;
    padding-right: 10px;
  }

  .filterName {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .listContainer {
    flex-grow: 1;
    flex-shrink: 1;
    height: 100%;
    max-height: calc(100% - 65px);
  }

  .listContent {
    width: 100%;
    height: 100%;
    padding-right: 10px;
    overflow: auto;
  }
</style>