<template>
  <div class="Discount">
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
        <span class="you">我的优惠</span>
      </div>
      <!-- header-top-end -->

      <!-- header-body -->
      <div class="header-body">
        <router-link to="/RedBag">
          <span class="bag">红包</span>
        </router-link>

        <router-link to="/BusinessVouchers">
          <span>商家代金券</span>
        </router-link>
      </div>
      <!-- header-body-end -->
    </div>
    <!-- header-end -->
    <!-- body -->
    <div class="item1">
      <div class="item1-left">
        有
        <span>3</span>
        个红包即将到期
      </div>
      <router-link to="/hbDescription">
        <div class="item1-right">
          <img src="../../images/问号.png" alt />
          红包说明
        </div>
      </router-link>
    </div>
    <div class="item2">
      <ul>
        <li v-for="(usebag,index) in usebags" :key="index">
          <div>
            <span>￥</span>
            <span>{{usebag.amount}}</span>
            <span v-show="usebag.amount != 4.5">.</span>
            <span v-show="usebag.amount != 4.5">0</span>
            <p>{{usebag.description_map.sum_condition}}</p>
          </div>
          <div>
            <p>分享红包</p>
            <p>{{usebag.description_map.validity_periods}}</p>
            <p>{{usebag.description_map.phone}}</p>
          </div>
          <div>{{usebag.description_map.validity_delta}}</div>
        </li>
      </ul>
    </div>
    <div class="item3">
      <p>限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>
    </div>
    <router-link to="/hbHistory">
      <div class="item4">
        <span>查看历史红包</span>
        <span>
          <img src="../../images/向右箭头 (4).png" alt />
        </span>
      </div>
    </router-link>

    <!-- body-end -->
    <!-- footer -->
    <div class="footer">
      <router-link to="/exchange">
        <div class="footer-left">兑换红包</div>
      </router-link>
      <router-link to="/commend">
        <div class="footer-right">推荐有奖</div>
      </router-link>
    </div>
    <!-- footer-end -->
  </div>
</template>

<script>
  export default {
    name: "Discount",
    data() {
      return {
        usebags: []
      };
    },
    created() {
      this.getUsebag();
    },
    methods: {
      getUsebag() {
        this.$axios
          .get(
            `https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0`
          )
          .then(res => {
            console.log(res.data);
            this.usebags = res.data;
          });
      }
    }
  };
</script>


<style scoped>
  a {
    text-decoration: none
  }

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
    left: 1.265rem;
  }

  .header-body {
    background: #ffffff;
    padding-top: 0.575rem;

    padding-bottom: 0.115rem;
    text-align: center;
    font-size: 0.1495rem;
    display: flex;
    justify-content: space-around;
  }

  .bag {
    color: #3190e8;
    border-bottom: 2px solid #3190e8;
    padding-bottom: 0.069rem;
  }

  .item1 {
    display: flex;
    justify-content: space-between;
  }

  .item1-left {
    font-size: 0.115rem;
    line-height: 0.46rem;
    margin-left: 0.184rem;
  }

  .item1-right {
    font-size: 0.115rem;
    line-height: 0.46rem;
    color: #3190e8;
    margin-right: 0.184rem;
  }

  .footer {
    display: flex;
    justify-content: space-around;
    line-height: 0.46rem;
    text-align: center;
    font-size: 0.161rem;
    color: #555;
    background: #ffffff;
    margin-top: 0.736rem;
  }

  .item2 {
    padding-left: 0.161rem;
    padding-right: 0.161rem;
  }

  .item2 ul li {
    display: flex;
    justify-content: space-between;
    padding: 0.23rem 0.115rem 0.184rem;
    background: #fff url(../../images/tip.png) repeat-x;
    background-size: 0.115rem 0.046rem;
    margin-bottom: 0.115rem;
    border-radius: 0.0575rem;
  }

  .item2 ul li div:nth-child(1) span:nth-child(1) {
    font-size: 0.1725rem;
    color: #ff5340;
    font-weight: 700;
  }

  .item2 ul li div:nth-child(1) span:nth-child(2) {
    font-size: 0.345rem;
    color: #ff5340;
  }

  .item2 ul li div:nth-child(1) span:nth-child(3) {
    font-size: 0.184rem;
    color: #ff5340;
    font-weight: 700;
  }

  .item2 ul li div:nth-child(1) span:nth-child(4) {
    font-size: 0.184rem;
    color: #ff5340;
    font-weight: 700;
  }

  .item2 ul li div:nth-child(1) p {
    font-size: 0.092rem;
    color: #999;
  }

  .item2 ul li div:nth-child(2) p:nth-child(1) {
    font-size: 0.161rem;
    color: #666;
    margin-left: -0.161rem;
  }

  .item2 ul li div:nth-child(2) p:nth-child(2) {
    list-style-type: disc;
    margin-left: -0.161rem;
    font-size: 0.092rem;
    color: #999;
  }

  .item2 ul li div:nth-child(2) p:nth-child(3) {
    list-style-type: disc;
    margin-left: -0.161rem;
    font-size: 0.092rem;
    color: #999;
  }

  .item2 ul li div:nth-child(3) {
    font-size: 0.1725rem;
    color: #ff5340;
  }

  .item3 p {
    list-style-type: disc;
    font-size: 0.092rem;
    color: #999;
    margin-left: 0.092rem;
    margin-left: 0.46rem;
  }

  .item4 {
    /* text-align: center; */
    display: flex;
    justify-content: center;
    padding-top: 0.46rem;
  }

  .item4 span {
    font-size: 0.115rem;
    color: #999;
  }

  .item4 span:nth-child(2) {
    margin-top: rem;
    margin-left: 0.046rem;
  }
</style>