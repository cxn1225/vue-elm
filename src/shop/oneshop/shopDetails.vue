<template>
    <div class="shopDetails">
        <div class="header">
            <h3><span @click="$router.go(-1)" style="float: left">&nbsp;<img src="../../images/左箭头.png" alt="左箭头" />
                    &nbsp;</span> 商家详情</h3>
        </div>
        <div class="body1">
            <p class="p1">活动与属性</p>
            <p v-if="shopDetails.activities" v-for="(item1, index) in shopDetails.activities" :key="item1.id">
                <span :style="'background-color: #'+item1.icon_color">{{item1.icon_name}}</span>&nbsp;&nbsp;
                {{item1.description}}(APP专享)
            </p>
            <p v-if="shopDetails.supports" v-for="(item2, index) in shopDetails.supports" :key="item2.id">
                <span :style="'background-color: #'+item2.icon_color">{{item2.icon_name}}</span>&nbsp;&nbsp;
                {{item2.description}}(APP专享)
            </p>

        </div>
        <div class="body2">
            <div class="d1">
                <h4>食品监督安全公示</h4>
                <router-link to="/security" tag="h5">企业认证详情></router-link>
            </div>
            <div class="d2">
                <img class="img" src="../../assets/笑脸.png" alt="">
                <p>监督检查结果：<span style="color: rgb(21, 128, 0)">良好</span><br></p>
                <p>检查日期：</p>
            </div>
        </div>
        <div class="footer">
            <h4>商家信息</h4>
            <p>{{shopDetails.name}}</p>
            <p>地址：{{shopDetails.address}}</p>
            <p>营业时间：{{shopDetails.opening_hours}}</p>
            <p>营业执照<span>></span></p>
            <p>餐饮服务许可证<span>></span></p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'shopDetails',
        data() {
            return {
                shopId: 0,
                shopDetails: {}
            }
        },
        created() {
            this.getShopDetails()
        },
        methods: {
            getShopDetails() {
                this.shopId = this.$route.query.id
                this.$axios.get(`https://elm.cangdu.org/shopping/restaurant/${this.shopId}`).then(result => {
                    this.shopDetails = result.data
                    console.log(this.shopDetails)
                }).catch(err => {
                    console.log(err.data)
                })
            }
        },
    }
</script>


<style scoped>
    .header {
        width: 100%;
        height: 0.45rem;
        line-height: 0.45rem;
        background-color: rgb(0, 140, 255);
        color: #ffffff;
        position: fixed;
        z-index: 100;
        font-size: 0.16rem
    }

    .header h3 {
        text-align: center
    }

    .body1 {
        padding-top: 0.45rem;
        background-color: #ffffff
    }

    .body1 p {
        padding: 0.06rem 0.2rem;
        font-size: 0.12rem;
    }

    .body1 .p1 {
        padding: 0.1rem 0.18rem;
        border-bottom: 1px solid #eeeeee;
        font-size: 0.16rem;
    }

    .body1 span {
        padding: 0.02rem;
        border-radius: 0.02rem;
        color: #eeeeee;
    }

    .body2 {
        margin-top: 0.15rem;
        background-color: #ffffff;
    }

    .body2 h4 {
        float: left;
        padding-left: 0.1rem;
    }

    .body2 h5 {
        float: right;
        padding-right: 0.1rem;
        color: #aaaaaa
    }

    .body2 .d1 {
        overflow: hidden;
        border-bottom: 1px solid #eeeeee;
        padding: 0.1rem 0;
    }

    .body2 .d2 {
        height: 0.32rem;
        padding: 0.2rem 0.2rem;
    }

    .body2 .d2 .img {
        display: inline-block;
        float: left;
        margin-right: 0.2rem;
    }

    .body2 .d2 p {
        font-size: 0.14rem;
    }

    .footer {
        margin-top: 0.15rem;
        background-color: #ffffff;
    }

    .footer h4 {
        padding: 0.1rem;
        border-bottom: 1px solid #eeeeee;
    }

    .footer p {
        padding: .14rem;
        font-size: 0.14rem;
        border-bottom: 1px solid #eeeeee;
    }

    .footer span {
        display: block;
        float: right;
        font-weight: 800
    }
</style>
<!-- 满减/新用户
    activities：Array（）

-->