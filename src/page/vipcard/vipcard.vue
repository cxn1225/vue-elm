<template>
  <div class="member-center">
    <!-- header -->
    <div class="header">
      <!-- header-top -->
      <div class="header-top">
        <span class="zuo">
          <router-link to="/profile">
            <a href>
              <img src="../../images/左箭头.png" alt="左箭头" />
            </a>
          </router-link>
        </span>
        <span class="you">会员中心</span>
      </div>
      <!-- header-top-end -->

      <!-- header-body -->
      <div class="header-body">
        <p>
          为账户
          <span>15525062769</span>购买会员
        </p>
      </div>
      <!-- header-body-end -->
    </div>
    <!-- header-end -->

    <!-- body -->
    <div class="item1">
      <router-link to="vipDescription">
        <div class="item1-header">
          <span>会员特权</span>
          <span>
            会员说明
            <img src="../../images/right.png" alt />
          </span>
        </div>
      </router-link>

      <div class="item1-body">
        <div>
          <img src="../../images/save.jpg" alt />
        </div>
        <div>
          <h4>减免配送费</h4>
          <p>每月减免30单。每日可减免3单，每单最高减4元</p>
          <p>蜂鸟专送专享</p>
        </div>
      </div>
      <div class="item1-body">
        <div>
          <img src="../../images/bag.jpg" alt />
        </div>
        <div>
          <h4>减免配送费</h4>
          <p>每月减免30单。每日可减免3单，每单最高减4元</p>
          <p>蜂鸟专送专享</p>
        </div>
      </div>
    </div>
    <div class="item2">
      <p>开通会员</p>
      <div class="shop">
        <div>
          <span>1个月</span>
          <span>￥20</span>
        </div>
        <div>
          <router-link to="/PayFor">
            <span>购买</span>
          </router-link>
        </div>
      </div>
    </div>
    <router-link to="/useCard">
      <div class="item3">
        <span>兑换会员</span>
        <span>
          使用卡号卡密
          <img src="../../images/right.png" alt />
        </span>
      </div>
    </router-link>

    <router-link to="/invoiceRecord">
      <div class="item3">
        <span>购买记录</span>
        <span class="tip">
          开发票
          <img src="../../images/right.png" alt />
        </span>
      </div>
    </router-link>

    <!-- body-end -->
  </div>
</template>

<script>
  export default {
    name: "MemberCenter"
  };
</script>


<style scoped>
  a {
    text-decoration: none
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
    position: relative;
    top: 0.46rem;
  }

  .header-body p {
    font-size: 0.138rem;
    color: #666;
    line-height: 0.46rem;
    padding-left: 0.161rem;
  }

  .header-body span {
    font-weight: 700;
    padding-right: 0.071875rem;
  }

  .item1 {
    margin-top: 0.46rem;
    background: #ffffff;
  }

  .item1-header {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #f5f5f5;
  }

  .item1-header span {
    line-height: 0.46rem;
  }

  .item1-header span:nth-child(1) {
    font-size: 0.161rem;
    color: #333;
    margin-left: -0.805rem;
  }

  .item1-header span:nth-child(2) {
    font-size: 0.138rem;
    color: #999;
    margin-right: -0.805rem;
  }

  .item1-body {
    display: flex;
    justify-content: space-around;
    padding: 0.23rem 0;
    border-bottom: 1px solid #f5f5f5;
  }

  .item1-body div:nth-child(1) img {
    width: 0.0368rem;
    height: 0.414rem;
    margin-left: -0.345rem;
  }

  .item1-body div:nth-child(2) {
    margin-left: -0.805rem;
  }

  .item1-body div:nth-child(2) h4 {
    font-size: 0.161rem;
    color: #333;
    font-weight: 400;
  }

  .item1-body div:nth-child(2) p {
    font-size: 0.115rem;
    color: #999;
  }

  .item2 {
    margin-top: 0.138rem;
    background: #ffffff;
  }

  .item2 p {
    font-size: 0.161rem;
    color: #333;
    line-height: 0.46rem;
    margin-left: 0.161rem;
    border-bottom: 1px solid #f5f5f5;
  }

  .shop {
    display: flex;
    justify-content: space-around;
    line-height: 0.46rem;
  }

  .shop div:nth-child(1) {
    margin-left: -0.805rem;
  }

  .shop div:nth-child(2) {
    margin-right: -0.575rem;
    border: 0.00575rem solid #f60;
    border-radius: 0.046rem;
    line-height: 0.276rem;
    height: 0.276rem;
    width: 0.598rem;
    text-align: center;
    font-size: 0.138rem;
    color: #f60;
    margin-top: 0.115rem;
  }

  .shop div:nth-child(2) span {
    color: #f60;
  }

  .shop div:nth-child(1) span {
    margin-left: 0.069rem;
  }

  .shop div:nth-child(1) span:nth-child(1) {
    font-size: 0.161rem;
    color: #333;
  }

  .shop div:nth-child(1) span:nth-child(2) {
    font-size: 0.161rem;
    font-weight: 700;
    color: #f60;
  }

  .item3 {
    padding: 0 0.161rem;
    margin-bottom: 0.115rem;
    background: #ffffff;
    margin: 0.138rem 0;
  }

  .item3 span {
    line-height: 0.46rem;
  }

  .item3 span:nth-child(1) {
    font-size: 0.161rem;
    color: #333;
    margin-right: 1.61rem;
  }

  .item3 span:nth-child(2) {
    font-size: 0.138rem;
    color: #999;
    margin-right: 0.046rem;
  }

  .item3 .tip {
    margin-left: 0.345rem;
  }
</style>