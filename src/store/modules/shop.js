const state = {
    shop: {}
}
const getters = {
    shop: state => state.shop
}
const mutations = {
    setShop: (state, shop) => state.shop = shop
}
const actions = {
    setShopAsync: ({ commit }, shop) => commit("setShop", shop)
}

export default {
    state, getters, mutations, actions
}