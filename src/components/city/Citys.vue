<template>
  <div>
    <section class="group_city_container">
      <ul class="letter_classify">
        <li v-for="(First,index) in citys" :key="index" class="letter_classify_li">
          <h4 class="city_title">
            {{index}}
            <span>（按字母排序）</span>
          </h4>
          <ul class="groupcity_name_container citylistul clear">
            <router-link class="ellipsis" v-for="(city,id) in First" :key="id"
              :to="{name:'clickcity',params:{id:city.id}}" tag="li">{{city.name}}</router-link>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        citys: {}
      };
    },
    created() {
      this.getCityPosition();
    },
    methods: {
      getCityPosition() {
        this.$axios
          .get("https://elm.cangdu.org/v1/cities?type=group")
          .then(res => {
            var err = [];
            for (var key in res.data) {
              err.push(key);
            }
            err.sort();
            var obj = {};
            for (var i = 0; i < err.length; i++) {
              for (var key in res.data) {
                if (err[i] == key) {
                  obj[err[i]] = res.data[key];
                }
              }
            }
            this.citys = obj;
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

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 0.235em;
    margin-block-end: 0.235em;
    margin-inline-start: 0rem;
    margin-inline-end: 0rem;
    /* padding-inline-start: 0.4rem; */
  }

  .letter_classify_li {
    margin-bottom: 0.09375rem;
    background-color: #fff;
    border-bottom: 0.01rem solid #e4e4e4;
  }

  .city_title {
    color: #666;
    font-weight: 400;
    text-indent: 0.105rem;
    border-top: 0.02rem solid #e4e4e4;
    border-bottom: 0.01rem solid #e4e4e4;
    font: 0.129rem/0.34rem Helvetica Neue;
  }

  .city_title span {
    font-size: 0.111rem;
    color: #999;
  }

  h4 {
    display: block;
    margin-block-start: 0.312em;
    margin-block-end: 0.312em;
    margin-inline-start: 0rem;
    margin-inline-end: 0rem;
    font-weight: bold;
  }

  .clear {
    zoom: 1;
  }

  .letter_classify_li .groupcity_name_container li {
    color: #666;
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

  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .clear:after {
    content: "";
    display: block;
    clear: both;
  }
</style>