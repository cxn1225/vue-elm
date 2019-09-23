<template>
  <div class="balance-statement">
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
        <span class="you">我的优惠</span>
      </div>
      <!-- header-top-end -->

      <!-- body -->
      <div class="body-content">
        <div class="content">
          <p class="user">
            尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：购卡后31天内，累积享有30单减免配送服务（每日最多三单，每单最高减免4元）。注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
          </p>
        </div>
        <h3>Q1：特权介绍</h3>
        <ul>
          <li>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</li>
          <li>减免配送费：饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</li>
          <li>更多特权，敬请期待！</li>
        </ul>
        <h3>Q2: 资费介绍</h3>
        <ul>
          <li>饿了么会员卡：20元</li>
        </ul>
        <h3>Q3: 使用说明</h3>
        <p>当用户满足以下任一条件，会员服务自动失效</p>
        <ul>
          <li>自绑定之日起超过31天；</li>
          <li>在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</li>
        </ul>
        <h3>Q4: 购卡说明</h3>
        <ul>
          <li>在线购买：饿了么App>我的>饿了么会员卡</li>
        </ul>
        <h3>Q5: 温馨提示</h3>
        <ul>
          <li>用户在当前会员服务失效前，无法购买新卡。</li>
          <li>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</li>
        </ul>
      </div>

      <!-- body-end -->
    </div>
    <!-- header-end -->
  </div>
</template>

<script>
  export default {
    name: "BalanceStatement"
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
    top: 0.46rem;
    left: 1.38rem;
  }

  .body-content {
    margin: 0 0.184rem;
  }

  .content {
    margin-top: 0.529rem;
    margin-left: 0.115rem;
    margin-right: 0.115rem;
  }

  .content .user {
    font-size: 0.138rem;
    margin: 0 0.46rem;
    padding-top: 0.115rem;
  }

  .title {
    line-height: 0.46rem;
    color: #333;
    font-weight: 400;
    font-size: 0.1725rem;
  }

  .content-body {
    font-size: 0.138rem;
    color: #666;
    line-height: 0.23rem;
  }

  h3 {
    margin-top: 0.153333rem;
    margin-bottom: 0.046rem;
    font-size: 0.161rem;
    font-weight: 600;
    color: #333;
  }

  ul li {
    color: #666;
    margin-bottom: 0.046rem;
    font-size: 0.138rem;
  }

  p {
    font-size: 0.138rem;
  }
</style>