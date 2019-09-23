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
        <span class="you">准时达问题</span>
      </div>
      <!-- header-top-end -->
    </div>
    <!-- header-end -->
    <div class="content">
      <h3>
        Q1:准时达规则：饿了么用户在饿了么APP带有准时达标签的商家下单，若商家送达时间超过承诺送达时间10分钟，我们将为您赔付一个无门槛红包。
        ### Q2：关于准时达的特殊情况：a.预订单暂不参加赔付；b.夜间部分时段下单暂不参加赔付；c.恶劣天气（雨、雪等）暂不参加赔付；d.每位用户每天最多赔付3个红包；
        ### Q3：常见问题 Q1:我怎么收到赔付红包？A1：当确认送达商品时已超过承诺送达时间10分钟，我们将向您的饿了么账户发放一个无门槛红包，同时会有短信通知到您的手机号码。
        ### 饿了么保留法律允许范围内对活动的解释权
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