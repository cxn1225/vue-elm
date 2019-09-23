<template>
  <div>
    <div class="choose_type_Container">
      <header>支付方式</header>
      <ul>
        <li class>
          <span>
            货到付款
            <span>（商家不支持货到付款）</span>
          </span>
          <i class="iconfont">&#xe606;</i>
        </li>
        <li class="choose">
          <span>在线支付</span>
          <i class="iconfont green">&#xe826;</i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.choose_type_Container {
  min-height: 2.343rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 204;
}
.choose_type_Container header {
  background-color: #fafafa;
  font-size: 0.164rem;
  color: #333;
  text-align: center;
  line-height: 0.4687rem;
}
.choose_type_Container ul li {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 0.164rem;
  line-height: 0.586rem;
  -ms-flex-align: center;
  align-items: center;
}
.choose_type_Container ul li span {
  font-size: 0.164rem;
  color: #ccc;
}
.choose_type_Container ul .choose span {
  color: #333;
}
.choose i {
  color: rgb(69, 236, 35);
}
</style>