<template>
  <div id="points">

    <h3>请重新进入</h3>
    <p>请返回后重新进入积分商城~</p>
    <img src="//yun.duiba.com.cn/webapp/img/retrylogin.png">
    <span>
      <router-link to="/profile" class="points-link"><i class="fa fa-angle-left"></i></router-link>
    </span>
  </div>

</template>

<script>
  export default {
    name: 'points',
    props: {

    }
  }
</script>


<style scoped>
  html {
    height: 100%;
  }

  body {
    position: relative;
    height: 100%;
    width: 100%;
    background: #f5f5f5
  }

  #points {
    text-align: center;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
  }

  h3 {
    font-size: 0.299rem;
    color: #0d7fd5;
    margin-bottom: 0.1725rem;
  }

  p {
    font-size: .138rem;
    color: #666;
    margin-bottom: .1728rem;
  }

  img {
    width: 1.7848rem;
    height: 1.748rem;
  }

  .fa-angle-left {
    padding-top: 0.69rem;
  }
</style>