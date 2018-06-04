const state = {
  hash: null
}

const getters = {
}

const mutations = {
  'game.create_hash': function(state) {
    state.hash = Math.floor(10000000*Math.random())
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