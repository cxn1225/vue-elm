import Vue from 'vue'
import Vuex from 'vuex'
import Loading from "./modules/loading"
import shop from "./modules/shop"
import historyList from "./modules/historyList"
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Loading,
        shop,
        historyList
    }
})
