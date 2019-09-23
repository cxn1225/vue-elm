<template>
  <div>
    <div class="headtop">
      <header id="head_top">
        <i @click="$router.go(-1)" class="iconfont order-logo">&#xe628;</i>

        <span data-v-cec0c0c0 class="title_text">选择发票抬头</span>

        <router-link to="/" tag="i" class="iconfont order-logo">&#xe601;</router-link>
      </header>
      <section class="choose_invoice">
        <span>不需要开发票</span>
        <i class="iconfont">&#xe606;</i>
      </section>
      <div @click="$router.go(-1)" class="determine">确定</div>
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
i {
  line-height: 0.457rem;
  color: white;
  width: 0.3rem;
  height: 0.3rem;
}
span {
  line-height: 0.457rem;
  font-size: 0.1875rem;
  color: white;
}
.choose_invoice {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  background-color: #fff;
  line-height: 0.6259rem;
  margin-top: 0.57rem;
  padding: 0 0.164rem;
}
.choose_invoice span {
  font-size: 0.1757rem;
  color: #333;
}
.rating_page p,
.rating_page span {
  font-family: Helvetica Neue, Tahoma, Arial;
}
.determine {
  background-color: #4cd964;
  font-size: 0.164rem;
  color: #fff;
  text-align: center;
  margin: 0 0.164rem;
  line-height: 0.4218rem;
  border-radius: 0.0469rem;
  margin-top: 0.1171rem;
}
.choose_invoice i {
  color: grey;
  line-height: 0.359rem;
}
</style>