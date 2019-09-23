<template>
  <div>
    <div class="container">
      <div class="headtop">
        <header id="head_top">
          <i @click="$router.go(-1)" class="iconfont order-logo">&#xe628;</i>

          <span class="title_text">添加地址</span>

          <router-link to="/" tag="i" class="iconfont order-logo">&#xe601;</router-link>
        </header>
      </div>
      <div class="address_page">
        <section class="page_text_container">
          <section class="section_list">
            <span class="section_left">联系人</span>
            <section class="section_right">
              <input
                type="text"
                name="name"
                v-model="address.name"
                placeholder="你的名字"
                class="input_style"
              />
              <div class="choose_sex">
                <span class="choose_option">
                  <i class="iconfont green">&#xe826;</i>
                  <span>先生</span>
                </span>
                <span class="choose_option">
                  <i class="iconfont green">&#xe826;</i>
                  <span>女士</span>
                </span>
              </div>
            </section>
          </section>
          <section class="section_list">
            <span class="section_left">联系电话</span>
            <section class="section_right">
              <div class="phone_add">
                <input
                  type="text"
                  name="phone"
                  v-model="address.phone"
                  placeholder="你的手机号"
                  class="input_style"
                />
                <img src="./../../assets/加.png" height="20" width="20" />
              </div>
              <!---->
            </section>
          </section>
          <section class="section_list">
            <span class="section_left">送餐地址</span>
            <section class="section_right">
              <router-link
                to="/search"
                tag="input"
                placeholder="小区/写字楼/学校等"
                class="choose_address"
                :value="aaa"
              ></router-link>
              <input
                type="text"
                v-model="address.address_detail"
                name="address_detail"
                placeholder="详细地址（如门牌号等）"
                class="input_style"
              />
            </section>
          </section>
          <section class="section_list">
            <span class="section_left">标签</span>
            <section class="section_right">
              <input
                type="text"
                v-model="address.tag"
                name="tag"
                placeholder="无/家/学校/公司"
                class="input_style"
              />
            </section>
          </section>
        </section>
        <div class="determine" @click="submit">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: {
        name: "",
        sex: 0,
        phone: "",
        address: "",
        address_detail: "",
        geohash: "",
        phone_bk: "",
        poi_type: "",
        tag: "",
        tag_type: 2
      },
      aaa: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.getName(to.params.name));
  },
  methods: {
    addAddress() {
      this.$axios
        .get("https://elm.cangdu.org/v1/users/72/addresses")
        .then(res => {
          console.log(res.data);
        });
    },
    submit() {
      console.log(this.address);
    },
    getName(name) {
      this.aaa = name;
      console.log(this.aaa);
    }
  }
};
</script>

<style scoped>
#head_top {
  background-color: #3190e8;
  position: fixed;
  z-index: 205;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.457rem;
  display: flex;
  justify-content: space-between;
}
#head_top i {
  line-height: 0.457rem;
  color: white;
  width: 0.3rem;
  height: 0.3rem;
}
#head_top span {
  line-height: 0.457rem;
  font-size: 0.1875rem;
  color: white;
}
.address_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 204;
  padding-top: 0.457rem;
}
.page_text_container {
  background-color: #fff;
  padding: 0 0.164rem;
}
.section_list {
  display: -ms-flexbox;
  display: flex;
  border-bottom: 0.0058rem solid #f5f5f5;
}
.section_list .section_left {
  font-size: 0.164rem;
  color: #333;
  -ms-flex: 2;
  flex: 2;
  line-height: 0.5859rem;
}
.section_list .section_right {
  -ms-flex: 5;
  flex: 5;
}
.section_list .section_right .input_style {
  width: 100%;
  height: 0.5859rem;
  font-size: 0.164rem;
  color: #999;
}
.section_list .section_right .choose_sex {
  display: -ms-flexbox;
  display: flex;
  line-height: 0.5859rem;
  border-top: 0.0058rem solid #f5f5f5;
}
.section_list .section_right .choose_sex .choose_option {
  font-size: 0.164rem;
  color: #333;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 0.1875rem;
}
.section_list .section_right .phone_add {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}
img {
  height: 0.2rem;
  width: 0.2rem;
}
.section_list .section_right .choose_address {
  font-size: 0.164rem;
  color: #999;
  line-height: 0.5859rem;
  border-bottom: 0.0058rem solid #f5f5f5;
}
.section_list .section_right .input_style {
  width: 100%;
  height: 0.5859rem;
  font-size: 0.164rem;
  color: #999;
}
.determine {
  background-color: #4cd964;
  font-size: 0.164rem;
  color: #fff;
  text-align: center;
  margin: 0 0.164rem;
  line-height: 0.4218rem;
  border-radius: 0.0468rem;
  margin-top: 0.1406rem;
}
.choose_option i {
  color: rgb(209, 208, 208);
}
</style>