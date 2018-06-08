const state = {
  hash: null,

  objects: {
    signals: {},
    managers: {},
    services: {},
    views: {},
    poviders: {},
    factories: {},
    instances: {},
  }
}

const getters = {

}

const mutations = {
  'game.create_hash': function(state) {
    state.hash = Math.floor(10000000*Math.random())
  },

  'game.register_signal': function(state, value) {
    
  }
}

const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions
}