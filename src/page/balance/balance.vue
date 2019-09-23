<template>
  <div class="scored">
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
        <span class="you">我的余额</span>
      </div>
      <!-- header-top-end -->

      <!-- header-body -->
      <div class="header-body clear">
        <div class="body-content">
          <div class="body-content-header clear">
            <span class="left">当前余额</span>
            <span class="right">
              <span class="photo">
                <img src="../../images/问号.png" alt />
              </span>
              <router-link exact to="/baDetail">
                <span>余额说明</span>
              </router-link>
            </span>
          </div>
          <div class="body-content-bory">
            <span>0.00</span>
            <span>元</span>
          </div>
          <div class="body-content-footer">
            <span>提现</span>
          </div>
        </div>
      </div>
      <!-- header-body-end -->
    </div>
    <!-- header-end -->

    <!-- body -->
    <div class="content">
      <div class="item1">
        <span>交易明细</span>
      </div>
      <div class="item2">
        <p>
          <img src="../../images/下载.png" alt />
        </p>
        <p>暂无明细记录</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Scored"
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
    border-top: 1px solid #f1f1f11c;
    top: 0.4485rem;
    position: relative;
    padding: 0.069rem;
    background-color: #3190e8;
  }

  .body-content {
    padding: 0.092rem;
    background-color: #fff;
    border-radius: 0.0345rem;
  }

  .body-content-header span {
    font-size: 0.0.1265rem;
  }

  .body-content-header span:nth-child(1) {
    color: #666;
  }

  .body-content-header span:nth-child(2) {
    color: #3190e8;
  }

  .photo {
    position: relative;
    top: 0.023rem;
  }

  .photo img {
    width: 0.138rem;
    height: 0.138rem;
    margin-right: 0.046rem;
  }

  .body-content-bory span:nth-child(1) {
    font-size: 0.141rem;
    color: #333;
  }

  .body-content-bory span:nth-child(2) {
    font-size: 0.161rem;
    color: #333;
    margin-left: 0.0713rem;
  }

  .body-content-footer {
    width: 100%;
    height: 0.46rem;
    font-size: 0.184rem;

    border-radius: 0.0345rem;
    line-height: 0.46rem;
    margin-top: 0.23rem;
    text-align: center;
    background-color: #ccc;
  }

  .body-content-footer span {
    color: #fff;
  }

  .content {
    position: relative;
    top: 0.437rem;
  }

  .item1 {
    font-size: 0.138rem;
    line-height: 0.46rem;
    padding-left: 0.115rem;
  }

  .item1 span {
    color: #999;
  }

  .item2 {
    text-align: center;
    margin-top: 0.23rem;
  }

  .item2 p img {
    width: 1.84rem;
    height: 1.15rem;
  }

  .item2 p:nth-child(2) {
    margin-top: 0.115rem;
    font-size: 0.161rem;
    color: #666;
  }

  .item2 p:nth-child(3) {
    font-size: 0.115rem;
    color: #999;
  }
</style>