const state = {
    historyList: []
}
const getters = {
    historyList: state => state.historyList
}
const mutations = {
    setHistoryList: (state, historyList) => state.historyList = historyList
}
const actions = {
    setHistoryList: ({ commit }, historyList) => commit("setHistoryList", historyList)
}

export default {
    state, getters, mutations, actions
}