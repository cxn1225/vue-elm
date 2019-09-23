<template>
  <div>
    <header class="city-head">
      <span>
        <i @click.prevent="$router.go(-1)" class="iconfont head-logo">&#xe628;</i>
      </span>
      <span class="head-city">搜索</span>
      <span></span>
    </header>
    <form @submit.prevent="handleSearch" autocomplete="off" method="post" class="city_form">
      <div>
        <input
          v-model="address.name"
          type="text"
          name="name"
          placeholder="输入学校、商务楼、地址"
          required="required"
          class="city_input input_style"
        />
      </div>
      <div>
        <input type="submit" name="submit" value="提交" class="city_submit input_style" />
      </div>
    </form>
    <header class="pois_search_history">搜索历史</header>
    <ul class="getpois_ul">
      <router-link
        :to="{name:'addaddress',params:{name:option.name}}"
        v-for="(option,index) in this.alladdress "
        :key="index"
      >
        <h4 class="pois_name ellipsis">{{option.name}}</h4>
        <p class="pois_address ellipsis">{{option.address}}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thiscity: {},
      address: {
        name: ""
      },
      alladdress: {},
      errors: {},
      show: false,
      id: ""
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
          console.log(this.city);
          this.id = this.city.id;
          console.log(this.id);
        })
        .catch(err => {
          if (err.response.data) {
            this.errors = err.response.data;
          }
        });
    },
    handleSearch() {
      this.$axios
        .get(
          "https://elm.cangdu.org/v1/pois?city_id=" +
            this.id +
            "&keyword=" +
            this.address.name +
            "&type=search"
        )
        .then(res => {
          this.alladdress = res.data;
          console.log(this.alladdress);
        })
        .catch(err => {
          if (err.response.data) {
            this.errors = err.response.data;
            console.log("没有搜到此地址");
          }
        });
    }
  }
};
</script>

<style scoped>
div {
  display: block;
}
.city-head {
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
.head-city {
  margin: 0, auto;
  font-size: 0.152rem;
  color: #fff;
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
.city_form {
  background-color: #fff;
  border-top: 0.01rem solid #e4e4e4;
  border-bottom: 0.01rem solid #e4e4e4;
  padding-top: 0.6448rem;
}
.city_form div {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}
.city_form div .city_input {
  border: 0.01rem solid #e4e4e4;
  padding: 0 0.07rem;
  font-size: 0.152rem;
  color: #333;
}
.city_form div .input_style {
  border-radius: 0.0234rem;
  margin-bottom: 0.09375rem;
  width: 100%;
  height: 0.329rem;
}
.city_form div .city_submit {
  background-color: #3190e8;
  font-size: 0.152rem;
  color: #fff;
}
.pois_search_history {
  border-top: 0.01rem solid #e4e4e4;
  border-bottom: 0.01rem solid #e4e4e4;
  padding-left: 0.117rem;
  font: 0.111rem/0.1875rem Microsoft YaHei;
}
.getpois_ul {
  background-color: #fff;
  border-top: 0.01rem solid #e4e4e4;
}
.getpois_ul li {
  margin: 0 auto;
  padding-top: 0.152rem;
  border-bottom: 0.01rem solid #e4e4e4;
}
.getpois_ul li .pois_name {
  margin: 0 auto 0.082rem;
  width: 90%;
  font-size: 0.152rem;
  color: #333;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.getpois_ul li .pois_address {
  width: 90%;
  margin: 0 auto 0.129rem;
  font-size: 0.105rem;
  color: #999;
}
</style>