class GameService {
  constructor() {

  }

  updateSignals(container) {
    if (!window.sk) return

    let injector = sk.$.getInjector()

    let signals = injector.signals

    Object.keys(signals).forEach(key => {
      let signal = signals[key]

      if (!container.signals[key]) {
        container.$set(container.signals, key, {
          name: key,
          listeners: signal.numListeners,
          calls: signal.numCalls,
          enabled: signal.enabled
        })
      } else {
        let other = container.signals[key]
        container.$set(other, 'listeners', signal.numListeners)
        container.$set(other, 'calls', signal.numCalls)
        container.$set(other, 'enabled', signal.enabled)
      }
    })
  }

  updateManagers(container) {
    if (!window.sk) return

    let injector = sk.$.getInjector()

    let managers = injector.managers

    Object.keys(managers).forEach(key => {
      let signal = managers[key]

      if (!container.managers[key]) {
        container.$set(container.managers, key, {
          name: key,
          enabled: signal.enabled
        })
      } else {
        let other = container.managers[key]
        container.$set(other, 'enabled', signal.enabled)
      }
    })
  }

  updateServices(container) {
    if (!window.sk) return

    let injector = sk.$.getInjector()

    let services = injector.services

    Object.keys(services).forEach(key => {
      let signal = services[key]

      if (!container.services[key]) {
        container.$set(container.services, key, {
          name: key
        })
      }
    })
  }

  updateViews(container) {
    if (!window.sk) return

    let injector = sk.$.getInjector()

    let views = injector.views

    Object.keys(views).forEach(key => {
      let signal = views[key]

      if (!container.views[key]) {
        container.$set(container.views, key, {
          name: key
        })
      }
    })
  }

  updateFactories(container) {
    if (!window.sk) return

    let injector = sk.$.getInjector()

    let factories = injector.factories

    Object.keys(factories).forEach(key => {
      let signal = factories[key]

      if (!container.factories[key]) {
        container.$set(container.factories, key, {
          name: key
        })
      }
    })
  }

  updateProviders(container) {
    if (!window.sk) return

    let injector = sk.$.getInjector()

    let providers = injector.providers

    Object.keys(providers).forEach(key => {
      let signal = providers[key]

      if (!container.providers[key]) {
        container.$set(container.providers, key, {
          name: key
        })
      }
    })
  }

  updateInstances(container) {
    if (!window.sk) return

    let injector = sk.$.getInjector()

    let instances = injector.instances

    Object.keys(instances).forEach(key => {
      let signal = instances[key]

      if (!container.instances[key]) {
        container.$set(container.instances, key, {
          name: key
        })
      }
    })
  }
}


module.exports = new GameService()