<template>
  <div class="pay-for">
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
        <span class="you">在线支付</span>
      </div>
      <!-- header-top-end -->
    </div>
    <!-- header-end -->

    <!-- content -->
    <div class="content">
      <div class="content-header">
        <p>支付剩余时间</p>
        <p id="deltime">
          00 &nbsp;:&nbsp;
          <span>{{minutes}}</span>
          &nbsp;:&nbsp;
          <span>{{secound}}</span>
        </p>
      </div>
      <div class="pay-way">选择支付方式</div>
      <div>
        <div class="item1" @click="verfy1">
          <div>
            <span>
              <img src="../../../images/支付宝.png" alt />
            </span>
            <span>支付宝</span>
          </div>
          <div @click="pay" class="vistory">
            <span v-show="!checked1">
              <img src="../../../images/支付成功 (1).png" alt />
            </span>

            <span v-show="checked1">
              <img src="../../../images/支付成功.png" alt />
            </span>
          </div>
        </div>
        <div class="item2" @click="verfy2">
          <div>
            <span>
              <img src="../../../images/微信.png" alt />
            </span>
            <span>微信</span>
          </div>
          <div @click="pay" id="vistory">
            <span v-show="!checked2">
              <img src="../../../images/支付成功 (1).png" alt />
            </span>

            <span v-show="checked2">
              <img src="../../../images/支付成功.png" alt />
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- content-end -->

    <p class="confirm" @click="change2">确认支付</p>

    <!-- 弹窗 -->
    <div class="popub" v-show="this.ended">
      <div class="popub-header">
        <img src="../../../images/感叹号.png" alt />
        <p>暂不开放支付功能</p>
      </div>
      <div class="popub-footer">
        <p @click="change">确认</p>
      </div>
    </div>

    <div class="popub" v-show="this.show">
      <div class="popub-header">
        <img src="../../../images/感叹号.png" alt />
        <p>当前环境无法进行支付，请打开官方APP进行付款</p>
      </div>
      <div class="popub-footer">
        <p @click="change2">确认</p>
      </div>
    </div>
    <div class="popub" v-show="this.overtime">
      <div class="popub-header">
        <img src="../../../images/感叹号.png" alt />
        <p>支付超时</p>
      </div>
      <div class="popub-footer">
        <p @click="change3">确认</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { setInterval, clearInterval } from "timers";
  export default {
    name: "PayFor",
    data() {
      return {
        ended: true,
        show: false,
        overtime: false,
        checked1: true,
        checked2: false,
        minutes: 15,
        secound: 0 + "0",
        timeOut: null
      };
    },
    created() {
      this.time();
    },
    methods: {
      change() {
        this.ended = !this.ended;
      },
      change2() {
        this.show = !this.show;
      },
      change3() {
        this.overtime = !this.overtime;
      },
      verfy1() {
        this.checked1 = true;
        this.checked2 = false;
      },
      verfy2() {
        this.checked2 = true;
        this.checked1 = false;
      },
      pay() {
        var vistory = document.getElementById("vistory");
        vistory.style.color = "green";
      },
      timing() {
        if (this.secound != 0) {
          this.secound--;
          if (this.secound < 10 || this.secound == 0) {
            this.secound = "0" + this.secound;
          }
        }

        if (this.secound == 0) {
          if (this.secound == 0 && this.minutes == 0) {
            clearInterval(this.timeOut);
            this.overtime = !this.overtime;
          } else {
            this.minutes--;
            if (this.minutes < 10) {
              this.minutes = "0" + this.minutes;
            }
            this.secound = 59;
          }
        }
      },
      time() {
        this.timeOut = setInterval(this.timing, 1000);
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
    height: 04485rem;
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
    margin-top: 0.4186rem;
  }

  .content-header {
    background-color: #fff;
    padding: 0.161rem;
    text-align: center;
  }

  .content-header p:nth-child(1) {
    font-size: 0.138rem;
    color: #666;
    margin-top: 0.23rem;
  }

  .content-header p:nth-child(2) {
    font-size: 0.345rem;
    color: #333;
    margin: 0.069rem 0 0.23rem;
  }

  .pay-way {
    background-color: #f1f1f1;
    padding: 0 0.161rem;
    font-size: 0.161rem;
    color: #666;
    line-height: 0.414rem;
  }

  .item1,
  .item2 {
    background: #fff;
    display: flex;
    padding: 0rem 0.161rem;
    line-height: 0.0598rem;
    border-bottom: 0.00575rem solid #f5f5f5;
    padding-top: 0.23rem;

    top: 0;
    bottom: 0;
    margin: auto;
  }

  .item1 div:nth-child(1) {
    display: flex;
    align-items: center;
  }

  .item1 div:nth-child(1) span:nth-child(1) {
    margin-top: 0.069rem;
  }

  .item1 div:nth-child(1) span:nth-child(2) {
    font-size: 0.161rem;
    color: #666;
    line-height: 0.23rem;
    margin-top: -0.115rem;
    margin-left: 0.115rem;
  }

  .item1 div:nth-child(2) {
    margin-left: 1.84rem;
    margin-top: 0.046rem;
  }

  .item2 div:nth-child(1) {
    display: flex;
    align-items: center;
  }

  .item2 div:nth-child(1) span:nth-child(1) {
    margin-top: 0.069rem;
  }

  .item2 div:nth-child(1) span:nth-child(2) {
    font-size: 0.161rem;
    color: #666;
    line-height: 0.23rem;
    margin-top: -0.115rem;
    margin-left: 0.115rem;
  }

  .item2 div:nth-child(2) {
    margin-left: 1.84rem;
    margin-top: 0.046rem;
  }

  .confirm {
    background-color: #4cd964;
    font-size: 0.161rem;
    color: #fff;
    text-align: center;
    margin: 0 0.161rem;
    line-height: 0.414rem;
    border-radius: 0.046rem;
    margin-top: 0.115rem;
    font-weight: 700;
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
    left: 1.17rem;
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
    line-height: 1.184rem;
    border: 1px;
    border-bottom-left-radius: 0.0575rem;
    border-bottom-right-radius: 0.0575rem;
  }

  .popub-footer p {
    color: #fff;
  }

  #vistory img {
    margin-left: 0.161rem;
  }
</style>