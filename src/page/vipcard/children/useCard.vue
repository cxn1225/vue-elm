<template>
  <div class="member-center">
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
        <span class="you">兑换会员</span>
      </div>
      <!-- header-top-end -->

      <!-- header-body -->
      <div class="header-body">
        <p>
          成功兑换后将关联到账户
          <span>1169337554</span>
        </p>
      </div>
      <!-- header-body-end -->
    </div>
    <!-- header-end -->

    <!-- body -->
    <form class="item">
      <div class="item1">
        <input type="text" maxlength="10" placeholder="请输入10位卡号" @keyup="present" />
      </div>
      <div class="item2">
        <input type="text" maxlength="6" placeholder="请输入6位卡密" @keyup="present" />
      </div>
    </form>
    <p class="exchange" @click="change">兑换</p>
    <div class="tip">
      <h3>——温馨提示——</h3>
      <p>新兑换的会员服务，权益以「会员说明」为准。</p>
      <p>月卡：30次减免配送费。</p>
      <p>季卡：90次减免配送费。</p>
      <p>年卡：360次减免配送费</p>
      <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
    </div>
    <!-- body-end -->

    <!-- 弹窗 -->
    <div class="popub" v-show="this.ended">
      <div class="popub-header">
        <img src="../../../images/感叹号.png" alt />
        <p>无效卡号</p>
      </div>
      <div class="popub-footer">
        <p @click="change">确认</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MemberCenter",
    data() {
      return {
        ended: false
      };
    },
    created() {
      this.getUser();
    },

    methods: {
      getUser() {
        this.$axios.get("https://elm.cangdu.org/v1/user").then(res => {
          // console.log(res.data);
        });
      },
      change() {
        this.ended = !this.ended;
      },
      present() {
        var item2Ele = document
          .getElementsByClassName("item2")[0]
          .getElementsByTagName("input")[0];
        var item1Ele = document
          .getElementsByClassName("item1")[0]
          .getElementsByTagName("input")[0];
        var exchangeEle = document.getElementsByClassName("exchange")[0];
        // console.log(exchangeEle);
        if (item1Ele.value.length >= 9 && item2Ele.value.length >= 5) {
          exchangeEle.style.background = "#4cd964";
          // console.log(2);
        }
        if (item1Ele.value.length < 10 || item2Ele.value.length < 6) {
          exchangeEle.style.background = "#ccc";
        }
      }
    }
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

  form {
    margin-top: 0em;
  }

  .item {
    margin-top: 0.46rem;
    display: flex;
    flex-direction: column;
  }

  .item1 input {
    border-bottom: 1px solid #f5f5f5;
    height: 0.46rem;
    font-size: 0.1495rem;
    color: #999;
    padding-left: 0.161rem;
    width: 5.29rem;
  }

  .item2 input {
    border-bottom: 1px solid #f5f5f5;
    height: 0.46rem;
    font-size: 0.1495rem;
    color: #999;
    padding-left: 0.161rem;
    width: 5.29rem;
  }

  .exchange {
    background-color: #ccc;
    font-size: 0.161rem;
    color: #fff;
    text-align: center;
    margin: 0 0.161rem;
    line-height: 0.414rem;
    border-radius: 0.046rem;
    margin-top: 0.161rem;
    font-weight: 700;
  }

  h3 {
    text-align: center;
    font-weight: 400;
    font-size: 0.1495rem;
    color: #aaa;
    margin-bottom: 0.138rem;
    margin-top: 0.46rem;
  }

  .tip p {
    font-size: 0.115rem;
    color: #aaa;
    line-height: 0.184rem;
    padding-left: 0.259rem;
    padding-right: 0.046rem;
  }

  .popub {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -1.38rem;
    margin-left: -1.38rem;
    width: 2.76rem;
    animation: tipMove 0.4s;
    background-color: #fff;
    padding-top: 0.138rem;
    border: 1px;
    border-radius: 0.0575rem;
  }

  .popub-header img {
    position: relative;
    width: 0.69rem;
    height: 0.69rem;
    border-radius: 50%;
    top: 0.115rem;
    left: 1.035rem;
  }

  .popub-header p {
    font-size: 0.161rem;
    color: #333;
    line-height: 0.207rem;
    text-align: center;
    margin-top: 0.184rem;
    padding: 0 0.092rem;
  }

  .popub-footer {
    font-size: 0.184rem;

    font-weight: 700;
    margin-top: 0.184rem;
    background-color: #4cd964;
    width: 100%;
    text-align: center;
    line-height: 0.414rem;
    border: 1px;
    border-bottom-left-radius: 0.0575rem;
    border-bottom-right-radius: 0.0575rem;
  }

  .popub-footer p {
    color: #fff;
  }
</style>