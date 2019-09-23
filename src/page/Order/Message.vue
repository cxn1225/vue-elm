<template>
  <div>
    <div class="order-head">
      <span>
        <i @click="$router.go(-1)" class="iconfont order-logo">&#xe628;</i>
      </span>
      <span class="head-order">
        <h2>订单详情</h2>
      </span>
      <span></span>
    </div>
    <div class="order-body">
      <section id="scroll_section" class="scroll_container">
        <section
          class="scroll_insert"
          style="transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"
        >
          <section class="order_titel">
            <img :src="'http://elm.cangdu.org/img/'+basket.restaurant_image_url" />
            <p>支付超时</p>
            <p></p>
            <a href="#/shop?geohash=31.22299,121.36025&amp;id=3303" class="order_again">再来一单</a>
          </section>
          <section class="food_list">
            <a href="#/shop?geohash=31.22299,121.36025&amp;id=3303" class="food_list_header">
              <div class="shop_name">
                <img :src="'http://elm.cangdu.org/img/'+basket.restaurant_image_url" />
                <span>595612</span>
              </div>
              <i class="iconfont icon-right">&#xe600;</i>
            </a>
            <ul class="food_list_ul">
              <li v-for="(list,id) in group[0]" :key="id">
                <p class="food_name ellipsis">{{list.name}}</p>
                <div class="quantity_price">
                  <span>X{{list.quantity}}</span>
                  <span>¥{{list.price}}</span>
                </div>
              </li>
            </ul>
            <div class="deliver_fee">
              <span>配送费</span>
              <span>{{deliver_fee.price}}</span>
            </div>
            <div class="pay_ment">实付:{{basket.total_amount}}.00</div>
          </section>
          <section class="order_detail_style">
            <header>配送信息</header>
            <section class="item_style">
              <p class="item_left">送达时间：</p>
              <div class="item_right">
                <p>{{this.orderMessage.deliver_time}}</p>
              </div>
            </section>
            <section class="item_style">
              <p class="item_left">送货地址：</p>
              <div class="item_right">
                <p>{{this.orderMessage.addressDetail}}</p>
                <p></p>
              </div>
            </section>
            <section class="item_style">
              <p class="item_left">配送方式：</p>
              <div class="item_right">
                <p>蜂鸟专送</p>
              </div>
            </section>
          </section>
          <section class="order_detail_style">
            <header>订单信息</header>
            <section class="item_style">
              <p class="item_left">订单号：</p>
              <div class="item_right">
                <p>{{this.basket.id}}</p>
              </div>
            </section>
            <section class="item_style">
              <p class="item_left">支付方式：</p>
              <div class="item_right">
                <p>{{this.orderMessage.pay_method}}</p>
              </div>
            </section>
            <section class="item_style">
              <p class="item_left">下单时间：</p>
              <div class="item_right">
                <p>{{this.basket.formatted_created_at}}</p>
              </div>
            </section>
          </section>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderMessage: {},
      basket: {},
      group: [],
      deliver_fee: {},
      packagefee: {}
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.getOrderMessage(to.params.id));
  },
  methods: {
    getOrderMessage(id) {
      this.id = id;
      console.log(this.id);
      this.$axios
        .get(
          "http://elm.cangdu.org/bos/v1/users/72/orders/" +
            this.id +
            "/snapshot"
        )
        .then(res => {
          this.orderMessage = res.data;
          this.basket = this.orderMessage._doc;
          this.group = this.basket.basket.group;
          this.deliver_fee = this.basket.basket.deliver_fee;
          this.packagefee = this.basket.basket.packing_fee;

          console.log(this.orderMessage);
          console.log(this.basket);
          console.log(this.group);
          console.log(this.deliver_fee);
          console.log(this.packagefee);
        });
    }
  }
};
</script>

<style scoped>
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
.scroll_insert {
  padding-bottom: 0.703rem;
}
.order_titel {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 0.55rem;
  padding-bottom: 0.1rem;
  background-color: #fff;
  margin-bottom: 0.117rem;
}
.order_titel img {
  border: 0.012rem solid #3190e8;
  border-radius: 50%;
  width: 0.703rem;
  height: 0.703rem;
}
.order_detail_page p,
.order_detail_page span {
  font-family: Helvetica Neue, Tahoma, Arial;
}
.order_titel p:first-of-type {
  font-size: 0.211rem;
  color: #333;
  font-weight: 700;
  margin-top: 0.09375rem;
}
.order_titel p:nth-of-type(2) {
  font-size: 0.129rem;
  color: #999;
  width: 2.34rem;
  margin-top: 0.07rem;
  text-align: center;
}
.order_titel .order_again {
  font-size: 0.14rem;
  color: #3190e8;
  margin-top: 0.117rem;
  border: 0.01rem solid #3190e8;
  padding: 0.0351rem 0.09375rem;
  border-radius: 0.0234rem;
}
.food_list {
  background-color: #fff;
}
.food_list .food_list_header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  padding: 0.0468rem 0.117rem;
  border-bottom: 0.01rem solid #f5f5f5;
}
.food_list .food_list_ul li {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 0.117rem;
  line-height: 0.468rem;
}
.food_list .food_list_ul li .food_name {
  font-size: 0.14rem;
  color: #666;
  -ms-flex: 4;
  flex: 4;
}
.food_list .food_list_ul li .quantity_price {
  -ms-flex: 1;
  flex: 1;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}
.food_list .food_list_ul li .quantity_price span:first-of-type {
  font-size: 0.14rem;
  color: #ccc;
}
.food_list .food_list_ul li .quantity_price span:nth-of-type(2) {
  font-size: 0.14rem;
  color: #666;
}
.food_list .deliver_fee {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 0.117rem;
  line-height: 0.468rem;
  border-top: 0.01rem solid #f5f5f5;
}
.food_list .food_list_header .shop_name img {
  width: 0.281rem;
  height: 0.281rem;
  vertical-align: middle;
  margin-right: 0.0468rem;
}
.food_list .food_list_header .shop_name span {
  font-size: 0.15rem;
  color: #333;
  font-weight: 700;
}
.food_list .deliver_fee span {
  font-size: 0.14rem;
  color: #666;
}
.food_list .deliver_fee span {
  font-size: 0.14rem;
  color: #666;
}
.food_list .pay_ment {
  font-size: 0.14rem;
  color: #fb6b23;
  border-top: 0.01rem solid #f5f5f5;
  font-weight: 700;
  line-height: 0.468rem;
  text-align: right;
  padding-right: 0.117rem;
}
.order_detail_style {
  background-color: #fff;
  margin-top: 0.117rem;
}
.order_detail_style header {
  font-size: 0.175rem;
  color: #333;
  padding: 0.117rem;
  border-bottom: 0.01rem solid #f5f5f5;
}
.order_detail_style .item_style {
  display: -ms-flexbox;
  display: flex;
  padding: 0.117rem;
}
.order_detail_style .item_style p {
  font-size: 0.152rem;
  color: #666;
  line-height: 0.234rem;
}
</style>