<template>
  <div>
    <CityTop />
    <Cityposition />
    <Cityhot />
    <Citys />
  </div>
</template>

<script>
  import CityTop from "../../components/city/Citytop";
  import Cityposition from "../../components/city/Cityposition";
  import Cityhot from "../../components/city/Cityhot";
  import Citys from "../../components/city/Citys";

  export default {
    data() {
      return {};
    },
    created() { },
    components: {
      CityTop,
      Cityposition,
      Cityhot,
      Citys
    }
  };
</script>

<style scoped>

</style>