<template>
  <div>
    <section id="hot_city_container">
      <h4 class="city_title">热门城市</h4>
      <ul class="citylistul clear">
        <router-link v-for="(city,index) in hotcity" :key="index" :to="{name:'clickcity',params:{id:city.id}}" tag="li">
          {{city.name}}</router-link>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hotcity: {}
      };
    },
    created() {
      this.getHotCity();
    },
    methods: {
      getHotCity() {
        this.$axios
          .get("https://elm.cangdu.org/v1/cities?type=hot")
          .then(res => {
            this.hotcity = res.data;
            // console.log(this.hotcity);
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

  #hot_city_container {
    background-color: #fff;
    margin-bottom: 0.09375rem;
  }

  .city_title {
    color: #666;
    font-weight: 400;
    text-indent: 0.246rem;
    border-top: 0.02rem solid #e4e4e4;
    border-bottom: 0.01rem solid #e4e4e4;
    font: 0.129rem/0.34rem Helvetica Neue;
  }

  .clear {
    zoom: 1;
  }

  .citylistul li {
    float: left;
    text-align: center;
    color: #3190e8;
    border-bottom: 0.025rem solid #e4e4e4;
    border-right: 0.025rem solid #e4e4e4;
    width: 25%;
    height: 0.41rem;
    font: 0.14rem/0.41rem Microsoft YaHei;
  }

  .clear:after {
    content: "";
    display: block;
    clear: both;
  }
</style>