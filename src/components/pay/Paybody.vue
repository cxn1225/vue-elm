<template>
  <div>
    <!-- 收货地址 -->
    <div class="address">
      <router-link to="/chooseaddress" class="address_container">
        <div class="address_empty_left">
          <i class="iconfont">&#xe604;</i>
          <div class="add_address">请添加一个收货地址</div>
        </div>
        <i class="iconfont">&#xe825;</i>
      </router-link>
    </div>
    <!-- 送达时间 -->
    <div class="time">
      <section class="delivery_model container_style">
        <p class="deliver_text">送达时间</p>
        <section class="deliver_time">
          <p>尽快送达 | 预计 15:01</p>
          <p>蜂鸟专送</p>
        </section>
      </section>
    </div>
    <!-- 支付方式 -->
    <div class="pay">
      <section class="pay_way container_style">
        <header @click="cover = !cover" class="header_style">
          <span>支付方式</span>
          <div class="more_type">
            <span>在线支付</span>
            <i class="iconfont">&#xe600;</i>
          </div>
        </header>
        <section class="hongbo">
          <span>红包</span>
          <span>暂时只在饿了么 APP 中支持</span>
        </section>
      </section>
    </div>
    <!-- 订单详情 -->
    <div class="message">
      <section class="food_list">
        <header>
          <img src="//elm.cangdu.org/img/16cc2b82e9b51810.png" />
          <span>北京烤鸭村</span>
        </header>
        <ul class="food_list_ul">
          <li class="food_item_style" v-for="(item, index) in shopCar" :key="index">
            <p class="food_name ellipsis">{{item.name}}</p>
            <div class="num_price">
              <span>x {{item.number}}</span>
              <span>¥{{item.price * item.number}}</span>
            </div>
          </li>
        </ul>
        <div class="food_item_style">
          <p class="food_name ellipsis">餐盒</p>
          <div class="num_price">
            <span></span>
            <span>¥ 111</span>
          </div>
        </div>
        <div class="food_item_style">
          <p class="food_name ellipsis">配送费</p>
          <div class="num_price">
            <span></span>
            <span>¥ 4</span>
          </div>
        </div>
        <div class="food_item_style total_price">
          <p class="food_name ellipsis">订单 ¥195</p>
          <div class="num_price">
            <span>待支付¥195</span>
            <span></span>
          </div>
        </div>
      </section>
    </div>
    <!-- 订单备注 -->
    <div>
      <section class="pay_way container_style">
        <router-link to="/remarks" class="header_style">
          <span>订单备注</span>
          <div class="more_type">
            <span class="ellipsis">口味、偏好等</span>
          </div>
        </router-link>
        <router-link to="/bill" class="hongbo support_is_available">
          <span>发票抬头</span>
          <div class="more_type">
            <span class="ellipsis">不需要开发票</span>
          </div>
        </router-link>
        <a href="#/confirmOrder/invoice" class="hongbo support_is_available">
          <span>发票抬头</span>
          <div class="more_type">
            <span class="ellipsis">不需要开发票</span>
          </div>
        </a>
      </section>
    </div>
    <div v-show="cover" @click="cover = !cover" class="cover"></div>
    <payway @click="cover = !cover" v-show="cover" />
  </div>

</template>

<script>
  import payway from "./Payway";
  export default {
    data() {
      return {
        cover: false
      };
    },
    props: {
      shopCar: Array
    },
    components: {
      payway
    }
  };
</script>

<style scoped>
  .address {
    margin-top: 0.55rem;
  }

  .address_empty_left i {
    color: skyblue;
    width: 0.2rem;
    height: 0.3rem;
    line-height: 0.3rem;
  }

  .address_container .address_empty_left,
  .address_container {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
  }

  .address_container {
    min-height: 0.82rem;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 0.141rem;
    background: url(./../../assets/下载.png) 0 100% repeat-x;
    background-color: #fff;
    background-size: auto 0.028rem;
  }

  .address_container .address_empty_left .add_address {
    font-size: 0.164rem;
    color: #333;
  }

  .delivery_model {
    border-left: 0.0468rem solid #3190e8;
    min-height: 0.9375rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
  }

  .container_style {
    background-color: #fff;
    margin-top: 0.09375rem;
    padding: 0 0.164rem;
  }

  .delivery_model .deliver_text {
    font-size: 0.1875rem;
    color: #333;
    font-weight: 700;
    padding-left: 0.07rem;
  }

  .delivery_model .deliver_time {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: end;
    align-items: flex-end;
  }

  .delivery_model .deliver_time p:first-of-type {
    font-size: 0.164rem;
    color: #3190e8;
  }

  .delivery_model .deliver_time p:nth-of-type(2) {
    font-size: 0.117rem;
    color: #fff;
    background-color: #3190e8;
    width: 0.5625rem;
    margin-top: 0.117rem;
    text-align: center;
    border-radius: 0.028rem;
    padding: 0.024rem;
  }

  .pay_way .header_style {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 0.4687rem;
  }

  .pay_way .header_style span:first-of-type {
    font-size: 0.164rem;
    color: #666;
  }

  .pay_way .header_style .more_type span:first-of-type {
    font-size: 0.14rem;
    color: #aaa;
    width: 2.344rem;
    display: inline-block;
    text-align: right;
    vertical-align: middle;
  }

  .pay_way .hongbo {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    border-top: 0.0058rem solid #f5f5f5;
  }

  .pay_way .hongbo span {
    font-size: 0.14rem;
    color: #aaa;
    line-height: 0.46875rem;
  }

  .food_list {
    background-color: #fff;
    margin-top: 0.09375rem;
  }

  .food_list header {
    padding: 0.164rem;
    border-bottom: 0.0059rem solid #f5f5f5;
  }

  .food_list header img {
    width: 0.2813rem;
    height: 0.2813rem;
    vertical-align: middle;
    margin: 0.05rem;
  }

  .food_list header span {
    font-size: 0.1875rem;
    color: #333;
  }

  .food_list .food_list_ul {
    padding-top: 0.117rem;
  }

  .food_list .food_item_style {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 0.4219rem;
    padding: 0 0.164rem;
  }

  .food_list .food_item_style .food_name {
    width: 2.5781rem;
  }

  .food_list .food_item_style .num_price {
    -ms-flex: 1;
    flex: 1;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
  }

  .food_list .food_item_style .num_price span:first-of-type {
    color: #f60;
  }

  .food_list .food_item_style p,
  .food_list .food_item_style span {
    font-size: 0.1523rem;
    color: #666;
  }

  .food_list .food_item_style .food_name {
    width: 2.5781rem;
  }

  .food_list .total_price {
    border-top: 0.0058rem solid #f5f5f5;
  }

  .pay_way .header_style {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 0.4687rem;
  }

  .pay_way .header_style span:first-of-type {
    font-size: 0.164rem;
    color: #666;
  }

  .pay_way .header_style .more_type span:first-of-type {
    font-size: 0.14rem;
    color: #aaa;
    width: 2.344rem;
    display: inline-block;
    text-align: right;
    vertical-align: middle;
  }

  .pay_way .hongbo {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    border-top: 0.0058rem solid #f5f5f5;
  }

  .pay_way .support_is_available span {
    color: #666;
  }

  .pay_way .hongbo span:nth-of-type(2) {
    color: #aaa;
  }

  .pay_way .hongbo span {
    font-size: 0.14rem;
    color: #aaa;
    line-height: 0.46875rem;
  }

  .cover {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 203;
  }

  .ellipsis {
    width: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>