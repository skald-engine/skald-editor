const state = {
  isOpen: true,
  path: '/home/capivara/Dev/skald/sample',
  name: 'Sample',
  version: 'v1.0.0',
  modificationDate: null
}

const getters = {

}

const mutations = {
  'project.open_project': (state, value) => {
    // state.menubar.selected = value;
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