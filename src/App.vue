<template>
  <div id="app">
    <router-view></router-view>
    <Loading v-show="loading" />
  </div>
</template>
<script>
  import shop from "./shop/shopList"
  import Loading from "./components/common/Loading.vue"
  import { mapGetters } from "vuex"
  export default {
    components: {
      shop,
      Loading
    },
    computed: mapGetters(["loading"])
  }
</script>
<style scoped>
  #app {
    background-color: #eeeeee;
  }
</style>