<template>
  <div>
    <div class="order-head">
      <span>
        <router-link to="/" tag="i" class="iconfont order-logo">&#xe628;</router-link>
      </span>
      <span class="head-order">
        <h2>订单列表</h2>
      </span>
      <span></span>
    </div>
    <ul class="order_list_ul">
      <router-link v-for="(order,index) in allOrders" :key="index" class="order_list_li"
        :to="{name:'message',params:{id:order.id}} ">
        <img :src="'http://elm.cangdu.org/img/'+order.restaurant_image_url" class="restaurant_image" />
        <section class="order_item_right">
          <section>
            <header class="order_item_right_header">
              <section class="order_header">
                <h4>
                  <span class="ellipsis">{{order.restaurant_name}}</span>
                  <svg fill="#333" class="arrow_right">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right" />
                  </svg>
                </h4>
                <p class="order_time">{{order.formatted_created_at}}</p>
              </section>
              <p class="order_status">支付超时</p>
            </header>
            <section class="order_basket">
              <p class="order_name ellipsis">热销榜121321</p>
              <p class="order_amount">￥{{order.total_amount}}</p>
            </section>
          </section>
          <div class="order_again">
            <span class="buy_again">再来一单</span>
          </div>
        </section>
      </router-link>
    </ul>
    <app-footer />
  </div>
</template>

<script>
  import footer from "../../components/footer/footer"
  export default {
    components: {
      "app-footer": footer
    },
    data() {
      return {
        allOrders: []
      };
    },
    created() {
      this.getAllOrders();
    },
    methods: {
      getAllOrders() {
        this.$axios
          .get("https://elm.cangdu.org/bos/v2/users/72/orders?limit=10&offset=0")
          .then(res => {
            this.allOrders = res.data;
          })
          .catch(err => {
            if (err.response.data) {
              this.errors = err.response.data;
            }
          });
      },
      message() {
        this.$router.push("/message");
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

  .order-head {
    background-color: #3190e8;
    display: flex;
    justify-content: space-around;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.457rem;
  }

  .order-logo {
    left: 0.09375rem;
    font-size: 0.164rem;
    color: #fff;
    width: 0.539rem;
    height: 0.164rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  h2 {
    font-size: 0.2rem;
    font-weight: 600;
    color: white;
  }

  .head-order {
    margin: 0, auto;
    font-size: 0.152rem;
    color: #fff;
    position: absolute;
    top: 50%;
    font-weight: 400;
    transform: translateY(-50%);
  }

  .order_list_ul {
    padding-top: 0.457rem;
  }

  .order_list_li {
    background-color: #fff;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 0.117rem;
    padding: 0.141rem 0.141rem 0;
  }

  .restaurant_image {
    width: 0.469rem;
    height: 0.469rem;
    margin-right: 0.09375rem;
  }

  .order_item_right {
    -ms-flex: 5;
    flex: 5;
  }

  .order_item_right_header {
    border-bottom: 0.006rem solid #f5f5f5;
    padding-bottom: 0.007rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .order_basket {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 0.468rem;
    border-bottom: 0.006rem solid #f5f5f5;
  }

  .order_name {
    font-size: 0.14rem;
    color: #666;
    width: 2.344rem;
  }

  .order_amount {
    font-size: 0.14rem;
    color: #f60;
    font-weight: 700;
  }

  .order_again {
    text-align: right;
    line-height: 0.375rem;
  }

  .buy_again {
    font-size: 0.129rem;
    color: #3190e8;
    border: 0.0058rem solid #3190e8;
    padding: 0.0234rem 0.0467rem;
    border-radius: 0.0351rem;
  }

  h4 {
    height: 0.23rem;
  }

  .arrow_right {
    width: 0.09375rem;
    height: 0.09375rem;
    fill: #ccc;
    margin-right: 0.0468rem;
  }
</style>