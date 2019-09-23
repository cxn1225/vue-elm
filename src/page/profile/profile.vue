<template>
  <div class="my">
    <!-- header -->
    <div class="header">
      <!-- header-top -->
      <div class="header-top">
        <span class="zuo">
          <a href>
            <img src="../../images/左箭头.png" alt="左箭头" />
          </a>
        </span>
        <span class="you">我的</span>
      </div>
      <!-- header-top-end -->

      <!-- header-body -->
      <div class="header-body clear">
        <div class="people left">
          <img src="../../images/people.png" alt />
        </div>
        <div class="left">
          <p class="login clear">
            <span class="left">登录/</span>
            <span class="left">注册</span>
          </p>
          <p class="phone">
            <span>
              <img src="../../images/phone.png" alt />
            </span>
            <span>暂无绑定手机号</span>
          </p>
        </div>
        <router-link tag="div" to="/login" class="arrow right">
          <img src="../../images/向右箭头.png" alt />
        </router-link>
      </div>
      <!-- header-body-end -->
    </div>
    <!-- header-end -->

    <!-- body -->
    <div class="body clear">
      <!-- item1 -->
      <div class="item1">
        <ul>
          <li>
            <router-link exact to="/balance">
              <span>
                <b>0.00</b>
                <span class="title">元</span>
              </span>
              <p>我的余额</p>
            </router-link>
          </li>
          <li>
            <router-link exact to="/benefit">
              <span>
                <b>3</b>
                <span class="title">个</span>
              </span>
              <p>我的优惠</p>
            </router-link>
          </li>
          <li>
            <router-link exact to="/myPoints">
              <span>
                <b>0</b>
                <span class="title">分</span>
              </span>
              <p>我的积分</p>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- item1-end -->

      <!-- item2 -->
      <div class="item2 clear">
        <ul>
          <router-link to="/orders">
            <li>
              <span class="ph">
                <img src="../../images/订单.png" alt />
              </span>
              <span>我的订单</span>
              <a href="#" class="right">
                <img src="../../images/right.png" alt />
              </a>
            </li>
          </router-link>

          <router-link to="/points">
            <li>
              <span class="ph">
                <img src="../../images/shop.png" alt />
              </span>
              <span>积分商城</span>
              <a href="#" class="right">
                <img src="../../images/right.png" alt />
              </a>
            </li>
          </router-link>

          <router-link to="/vipcard">
            <li>
              <span class="ph">
                <img src="../../images//win.png" alt />
              </span>
              <span>饿了么会员卡</span>
              <a href="#" class="right">
                <img src="../../images/right.png" alt />
              </a>
            </li>
          </router-link>
        </ul>
      </div>
      <!-- item2-end -->

      <!-- item3 -->
      <div class="item3">
        <ul>
          <router-link to="/service">
            <li>
              <span class="ph">
                <img src="../../images/左边小正方形.png" alt />
              </span>
              <span>服务中心</span>
              <a href="#" class="right">
                <img src="../../images/right.png" alt />
              </a>
            </li>
          </router-link>

          <router-link to="/downLoad">
            <li>
              <span class="ph">
                <img src="../../images/饿了么.png" alt />
              </span>
              <span>下载饿了么APP</span>
              <a href="#" class="right">
                <img src="../../images/right.png" alt />
              </a>
            </li>
          </router-link>
        </ul>
      </div>
      <!-- item3-end -->

      <!-- footer -->
      <app-footer class="footer" />
    </div>
    <!-- body-end -->
  </div>
</template>

<script>
  import footer from "../../components/footer/footer"
  export default {
    name: "My",
    components: {
      "app-footer": footer
    }
  };
</script>


<style scoped>
  a {
    text-decoration: none;
  }

  ul li {
    list-style-type: none;
  }

  .header-top {
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.4485rem;
  }

  .header-top span {
    color: #ffffff;
  }

  .zuo {
    position: relative;
    text-align: center;
    top: 0.069rem;
    left: 0.23rem;
  }

  .you {
    position: relative;
    font-size: 0.184rem;
    text-align: center;
    font-weight: 700;
    top: 0.046rem;
    left: 1.495rem;
  }

  .header-body {
    border-top: 1px solid #f1f1f11c;
    background-color: #3190e8;
    top: 0.437rem;
    position: relative;
    width: 100%;
    align-items: center;
    padding: 0.1533rem 0.138rem;
    z-index: 100;
    overflow: hidden;
    padding-left: 0.161rem;
    padding-top: 0.161rem;
    box-sizing: border-box
  }

  .header-body span {
    color: #fff;
  }

  .people {
    width: 0.575rem;
    height: 0.575rem;
  }

  .people img {
    width: 100%;
    height: 100%;
  }

  .login span {
    font-weight: 700;
    font-size: 0.184rem;
  }

  .login {
    position: absolute;
    margin-top: 0.069rem;
    margin-left: 0.115rem;
  }

  .phone {
    position: relative;
    top: 0.391rem;
    font-size: 0.13186rem;
    left: 0.3rem;
  }

  .phone span:nth-child(2) {
    position: relative;
    top: -0.023rem;
    margin-left: 0.046rem;
  }

  .arrow {
    position: relative;
    right: 0.345rem;
    top: 0.115rem;
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  .clear {
    overflow: hidden;
  }

  /* body */
  .body {
    position: relative;
    top: 0.69rem;
  }

  .item1 ul {
    display: flex;
    justify-content: space-around;
  }

  .item1 ul li {
    text-align: center;
  }

  .item1 ul li p {
    font-size: 0.1318;
    color: #666;
    font-weight: 400;
  }

  .item1 ul li b {
    font-size: 0.276rem;
    font-weight: 700;
    line-height: 0.23rem;
    font-family: Helvetica Neue, Tahoma;
  }

  .title {
    font-size: 0.1318rem;
    color: #666;
    font-weight: 400;
  }

  .item1 ul li:nth-child(1) b {
    color: #f90;
  }

  .item1 ul li:nth-child(2) b {
    color: #ff5f3e;
  }

  .item1 ul li:nth-child(3) b {
    color: #6ac20b;
  }

  .item2 ul {
    margin-top: 0.23rem;
  }

  .item2 ul li {
    height: 0.575rem;
    line-height: 0.6164rem;
    border-bottom: 1px solid #f1f1f1;
  }

  .ph {
    margin-left: 0.161rem;
    margin-right: 0.115rem;
  }

  .item2 ul li span {
    font-size: 0.161rem;
  }

  .item2 ul li a {
    position: absolute;
    right: 0.23rem;
  }

  .item3 ul {
    margin-top: 0rem;
  }

  .item3 ul li {
    height: 0.575rem;
    line-height: 0.1564rem;
    border-bottom: 1px solid #f1f1f1;
  }

  .item3 ul li span {
    font-size: 0.161rem;
  }

  .item3 ul li a {
    position: absolute;
    right: 0.23rem;
  }
</style>