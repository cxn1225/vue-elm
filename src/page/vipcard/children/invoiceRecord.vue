<template>
  <div class="buy-history">
    <!-- header -->
    <div class="header">
      <!-- header-top -->
      <div class="header-top">
        <span class="zuo">
          <router-link to="/vipcard">
            <a href>
              <img src="../../../images/左箭头.png" alt="左箭头" />
            </a>
          </router-link>
        </span>
        <span class="you">购买记录</span>
      </div>
      <!-- header-top-end -->
    </div>
    <!-- header-end -->

    <!-- body -->
    <div class="content">
      <img src="../../../images/下载.png" alt />
      <p>没有购买记录</p>
    </div>
    <!-- body-end -->
  </div>
</template>

<script>
  export default {
    name: "ByHistory"
  };
</script>


<style scoped>
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
    left: 1.38rem;
  }

  .content {
    margin-top: 0.92rem;
    margin-left: 1.035rem;
  }

  .content img {
    width: 1.84rem;
    height: 1.15rem;
    margin-top: 1.15rem;
  }

  .content p {
    font-size: 0.138rem;
    color: #999;
    margin-top: 0.184rem;
    margin-left: 0.0529rem;
  }
</style>