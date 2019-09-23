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
        <span class="you">匿名购买</span>
      </div>
      <!-- header-top-end -->
    </div>
    <!-- header-end -->
    <div class="content">
      <h3>
        <p>品牌合作 marketing_coop@ele.me ###</p>
        <p>媒体合作 pr@ele.me</p>
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