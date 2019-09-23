<template>
  <div>
    <div class="headtop">
      <header id="head_top">
        <i @click="$router.go(-1)" class="iconfont order-logo">&#xe628;</i>

        <span class="title_text">订单备注</span>

        <router-link to="/" tag="i" class="iconfont order-logo">&#xe601;</router-link>
      </header>
      <!-- 第二部分 -->
      <div class="second">
        <section class="quick_remark">
          <header class="header_style">快速备注</header>
          <ul class="remark_arr_list_ul">
            <li class="remark_arr_list_li">
              <span class="remark_item_li first">不要辣</span>
              <span class="remark_item_li">少点辣</span>
              <span class="remark_item_li last">多点辣</span>
            </li>
            <li class="remark_arr_list_li">
              <span class="remark_item_li first last">不要香菜</span>
            </li>
            <li class="remark_arr_list_li">
              <span class="remark_item_li first last">不要洋葱</span>
            </li>
            <li class="remark_arr_list_li">
              <span class="remark_item_li first last">多点醋</span>
            </li>
            <li class="remark_arr_list_li">
              <span class="remark_item_li first last">多点葱</span>
            </li>
            <li class="remark_arr_list_li">
              <span class="remark_item_li first">去冰</span>
              <span class="remark_item_li last">少冰</span>
            </li>
          </ul>
        </section>
      </div>
      <!-- 第三部分 -->
      <div>
        <section class="input_remark quick_remark">
          <header class="header_style">其他备注</header>
          <textarea placeholder="请输入备注内容(可不填)" class="input_text"></textarea>
        </section>
        <div class="determine">确定</div>
      </div>
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
  line-height: 0.357rem;
  font-size: 0.1875rem;
  color: white;
}
.quick_remark {
  background-color: #fff;
  padding: 0 0.14rem 0.2343rem;
}
.header_style {
  font-size: 0.1523rem;
  color: #333;
  line-height: 0.46875rem;
}
.quick_remark ul {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.quick_remark ul li {
  margin-right: 0.14rem;
  margin-bottom: 0.14rem;
}
.quick_remark ul li .first {
  border-left: 0.0058rem solid #3190e8;
  border-top-left-radius: 0.04688rem;
  border-bottom-left-radius: 0.04688rem;
}
.quick_remark ul li span {
  font-size: 0.14rem;
  color: #333;
  padding: 0.07rem 0.14rem;
  border: 0.0058rem solid #3190e8;
  border-left: 0;
}
.quick_remark ul li .last {
  border-top-right-radius: 0.04688rem;
  border-bottom-right-radius: 0.04688rem;
}
.input_remark {
  background-color: #fff;
}
.quick_remark {
  background-color: #fff;
  margin-top: 0.09375rem;
  padding: 0 0.14rem 0.2375rem;
}
.input_remark .input_text {
  width: 100%;
  background-color: #f9f9f9;
  border: 0.0058rem solid #eee;
  resize: none;
  min-height: 1.0548rem;
  border-radius: 0.04687rem;
  font-size: 0.14rem;
  color: #666;
  padding: 0.117rem;
}
.determine {
  background-color: #4cd964;
  font-size: 0.164rem;
  color: #fff;
  text-align: center;
  margin: 0 0.164rem;
  line-height: 0.4219rem;
  border-radius: 0.04688rem;
}
.second {
  margin-top: 0.57rem;
}
</style>