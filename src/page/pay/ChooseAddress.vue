<template>
  <div>
    <div class="headtop">
      <header id="head_top">
        <i @click="$router.go(-1)" class="iconfont order-logo">&#xe628;</i>

        <span data-v-cec0c0c0 class="title_text">选择地址</span>

        <router-link to="/" tag="i" class="iconfont order-logo">&#xe601;</router-link>
      </header>
      <router-link to="addaddress" class="add_icon_footer">
        <img src="../../assets/添加地址.png" height="24" width="24" />
        <span>新增收货地址</span>
      </router-link>
      <section id="scroll_section" class="scroll_container">
        <section class="list_cotainer">
          <ul class="deliverable_address">
            <!-- <li>
              <i class="iconfont green">&#xe826;</i>
              <div>
                <header>
                  <span>
                    <strong>李</strong>
                  </span>
                  <span>先生</span>
                  <span>1111111111</span>
                </header>
                <div class="address_detail ellipsis">
                  <span>家</span>
                  <p>11号</p>
                </div>
              </div>
            </li>
            <li>
              <i class="iconfont green">&#xe826;</i>
              <div>
                <header>
                  <span>
                    <strong>张张张</strong>
                  </span>
                  <span>女士</span>
                  <span>22233344</span>
                </header>
                <div class="address_detail ellipsis">
                  <span style="background-color: rgb(76, 217, 100);">公司</span>
                  <p>6667</p>
                </div>
              </div>
            </li>-->
          </ul>
          <!---->
        </section>
      </section>
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
.add_icon_footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.586rem;
  background-color: #fff;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 204;
}
img {
  height: 0.24rem;
  width: 0.24rem;
}
.add_icon_footer span {
  font-size: 0.164rem;
  color: #3190e8;
  margin-left: 0.07rem;
}
.rating_page p,
.rating_page span {
  font-family: Helvetica Neue, Tahoma, Arial;
}
.scroll_container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 0.0457rem;
  overflow-y: auto;
  margin-top: 0.47rem;
}
.scroll_container i {
  color: #4cd964;
  width: 0.3rem;
  height: 0.3rem;
}
.list_cotainer {
  padding-bottom: 1.1718rem;
}
.deliverable_address {
  background-color: #fff;
}
.deliverable_address span {
  color: black;
}
.deliverable_address li {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 0.0058rem solid #f5f5f5;
  padding: 0.164rem;
  line-height: 0.2343rem;
}
.deliverable_address li header {
  font-size: 0.164rem;
  color: #333;
}
.deliverable_address li .address_detail {
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.deliverable_address li .address_detail span {
  font-size: 0.1171rem;
  color: #fff;
  border-radius: 0.0351rem;
  background-color: #ff5722;
  height: 0.1406rem;
  line-height: 0.1406rem;
  padding: 0 0.0468rem;
  margin-right: 0.07rem;
}
.deliverable_address li .address_detail p {
  font-size: 0.1406rem;
  color: #777;
}
.title_text {
  font-size: 0.1875rem;
  color: #fff;
  text-align: center;
  font-weight: 700;
  line-height: 0.45rem;
}
</style>