<template>
    <div class="shopdetali">
        <div class="header" :style="{backgroundImage:'url(http://elm.cangdu.org/img/'+shop.image_path+')'}">
            <div class="onheader">
                <div class="img">
                    <img :src="'http://elm.cangdu.org/img/'+shop.image_path" alt="">
                </div>
                <div class="context">
                    <p class="p1">{{shop.name}}</p>
                    <p class="p2">商家配送 / 分钟送达 / {{shop.piecewise_agent_fee.tips}}
                    </p>
                    <p class="p3">公告：欢迎光临，用餐高峰请提前下单，谢谢</p>
                    <router-link tag="div" :to="{name:'shopDetails',query:{id:shop.id}}" class="right">></router-link>
                </div>

            </div>
        </div>
        <div class="list">
            <ul>
                <router-link :to="{name:'foodlist',query:{id:shop.id}}" tag="li">
                    商品
                </router-link>
                <router-link :to="{name:'comment',query:{id:shop.id}}" tag="li">
                    评价
                </router-link>
            </ul>
        </div>
        <div class="d1"></div>
        <div class="body">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'shopdetali',
        computed: mapGetters(["shop"]),
    }
</script>


<style scoped>
    .header {
        width: 100%;
        position: fixed;
        background-color: #ffffff;
    }

    .onheader {
        background-color: rgba(100, 100, 100, 0.7);
        padding: 0.1rem;
        overflow: hidden;
    }

    .img {
        width: 0.70rem;
        height: 0.70rem;
        float: left;
        border-radius: 10px;
    }

    .img img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    .context {
        float: left;
    }

    .context p {
        color: #ffffff;
        margin-left: 0.1rem;
        padding: 0.04rem 0;
        font-size: 0.1rem;
    }

    .onheader .p1 {
        font-size: 0.16rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .right {
        width: 0.2rem;
        height: 0.2rem;
        color: #ffffff;
        font-size: 0.3rem;
        position: absolute;
        right: 0.1rem;
        top: 0.25rem;
        z-index: 1000;
    }

    .list {
        width: 100%;
        padding: 0.15rem 0;
        height: 0.21rem;
        position: fixed;
        top: 0.97rem;
    }

    .list ul {
        list-style: none;
    }

    .list li {
        display: inline-block;
        margin: 0 0.77rem;
        text-align: center;
    }

    .list,
    .body {
        background-color: #ffffff;
    }

    .router-link-exact-active {
        color: aqua !important;
    }

    .d1 {
        height: 1.49rem;
    }
</style>