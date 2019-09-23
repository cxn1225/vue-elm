<template>
  <div>
    <div class="headtop">
      <header id="head_top">
        <i @click="$router.go(-1)" class="iconfont order-logo">&#xe628;</i>

        <span class="title_text">确认订单</span>

        <router-link to="/" tag="i" class="iconfont order-logo">&#xe601;</router-link>
      </header>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#head_top {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.457rem;
  display: flex;
  justify-content: space-between;
}
#head_top i {
  line-height: 0.457rem;
  color: white;
  width: 0.3rem;
  height: 0.3rem;
}
#head_top span {
  line-height: 0.457rem;
  font-size: 0.1875rem;
  color: white;
}
</style>