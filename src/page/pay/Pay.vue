<template>
  <div>
    <paytop />
    <paybody :shopCar="shopCar" />
    <payfooter />
  </div>
</template>

<script>
  import paytop from "../../components/pay/Paytop";
  import payfooter from "../../components/pay/Payfooter";
  import paybody from "../../components/pay/Paybody";

  export default {
    components: {
      paytop,
      paybody,
      payfooter
    },
    data() {
      return {
        shopCar: []
      }
    },
    created() {
      this.shopCar = this.$route.query.shopCar
      console.log(this.shopCar)
    },
  };
</script>

<style lang="scss" scoped>
</style>