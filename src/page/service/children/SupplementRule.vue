<template>
  <div class="down-load">
    <!-- header -->
    <div class="header">
      <!-- header-top -->
      <div class="header-top">
        <span class="zuo">
          <router-link to="/service">
            <a href>
              <img src="../../../images/左箭头.png" alt="左箭头" />
            </a>
          </router-link>
        </span>
        <span class="you">补签规则</span>
      </div>
      <!-- header-top-end -->
    </div>
    <!-- header-end -->
    <div class="content">
      <h3>
        如何补签？如忘记签到，可通过下单补签，漏签当日至红包领取日前一天每一笔有效订单可补签一天（仅限在线支付订单），
        例：如您在活动第三天忘记签到，只有你在第三天至第九天内完成一笔有效订单，即可完成补签。
      </h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DownLoad"
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
    left: 1.219rem;
  }

  .content {
    margin: 0 0.138rem;
    margin-top: 0.46rem;
  }

  h3 {
    display: block;
    font-size: 0.1725rem;
    color: #333;
    font-weight: 400;
    padding: 0 0.0805rem;
  }
</style>