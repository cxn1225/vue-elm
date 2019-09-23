<template>
  <div>
    <header class="city-head">
      <span class="head-logo">ele.me</span>
      <router-link to="/login" class="head-login">登录</router-link>
    </header>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  a,
  article,
  aside,
  b,
  body,
  button,
  dd,
  div,
  dl,
  dt,
  figcaption,
  figure,
  footer,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  i,
  input,
  li,
  nav,
  p,
  section,
  select,
  span,
  textarea,
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }

  div {
    display: block;
  }

  div {
    display: block;
  }

  .city-head {
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.457rem;
  }

  .head-logo {
    left: 0.09375rem;
    font-weight: 400;
    font-size: 0.164rem;
    color: #fff;
    width: 0.539rem;
    height: 0.164rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .head-login {
    right: 0.129rem;
    font-size: 0.152rem;
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
</style>