<template>
  <div class="down-load">
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
        <span class="you">下载</span>
      </div>
      <!-- header-top-end -->
    </div>
    <!-- header-end -->
    <div class="content">
      <img src="../../images/饿了么.jpg" alt />
      <p>下载饿了么APP</p>
      <div class="down" @click="change">下载</div>
    </div>

    <!-- 弹窗 -->
    <div class="popub" v-show="this.ended">
      <div class="popub-header">
        <img src="../../images/感叹号.png" alt />
        <p>IOS用户请前往AppStore下载</p>
      </div>
      <div class="popub-footer">
        <p @click="change1">确认</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DownLoad",
    data() {
      return {
        ended: false
      };
    },
    methods: {
      change() {
        this.ended = true;
      },
      change1() {
        this.ended = false;
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

  .content {
    margin-top: 0.46rem;
  }

  .content img {
    border-radius: 0.23rem;
    margin-top: 0.23rem;
    margin-left: 0.989rem;
  }

  .content p {
    text-align: center;
    font-size: 0.184rem;
    color: #666;
    margin-bottom: 0.23rem;
  }

  .content .down {
    background-color: #4cd964;
    font-size: 0.161rem;
    color: #fff;
    text-align: center;
    margin: 0 0.161rem;
    line-height: 0.414rem;
    border-radius: 0.046rem;
    margin-top: 0.115rem;
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