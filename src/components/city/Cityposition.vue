<template>
  <div>
    <nav class="city-nav">
      <div class="city-tip">
        <span>当前定位城市</span>
        <span>定位城市不标准时，请在城市列表中选择</span>
      </div>
      <router-link :to="{name:'clickcity',params:{id:city.id}}" class="guess-city">
        <span>{{city.name}}</span>
        <i class="iconfont">&#xe600;</i>
      </router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        city: {}
      };
    },
    created() {
      this.getCityPosition();
    },
    methods: {
      getCityPosition() {
        this.$axios
          .get("https://elm.cangdu.org/v1/cities?type=guess")
          .then(res => {
            this.city = res.data;
          })
          .catch(err => {
            if (err.response.data) {
              this.errors = err.response.data;
            }
          });
      }
    }
  };
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

  .city-nav {
    padding-top: 0.551rem;
    border-top: 0.01rem solid #e4e4e4;
    background-color: #fff;
    margin-bottom: 0.09375rem;
  }

  #hot-city-container {
    background-color: #fff;
    margin-bottom: 0.09375rem;
  }

  .city-title {
    color: #666;
    font-weight: 400;
    text-indent: 0.1055rem;
    border-top: 0.02rem solid #e4e4e4;
    border-bottom: 0.01rem solid #e4e4e4;
    font: 0.129rem/0.34rem Helvetica Neue;
  }

  .city-nav .city-tip {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 0.334rem;
    padding: 0 0.105rem;
  }

  .city-nav .city-tip span:first-of-type {
    font-size: 0.129rem;
    color: #666;
  }

  .city-nav .city-tip span:nth-of-type(2) {
    font-weight: 900;
    font-size: 0.111rem;
    color: #9f9f9f;
  }

  .city-nav .guess-city {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    height: 0.422rem;
    padding: 0.105rem;
    border-top: 0.01rem solid #e4e4e4;
    border-bottom: 0.02rem solid #e4e4e4;
    font: 0.176rem/0.422rem Microsoft YaHei;
  }

  .city-nav .guess-city span {
    color: #3190e8;
  }
</style>