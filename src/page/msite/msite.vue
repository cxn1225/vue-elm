<template>
    <div class="msite">
        <ul>
            <li v-for="(item, index) in shop" :key="index" @click="setShop(item)">
                <router-link tag="div" :to="{name:'oneShop',query:{id:item.id}}" class="shop">
                    <div class="img"> <img clas :src=" '//elm.cangdu.org/img/'+ item.image_path" alt=""></div>
                    <div class="context">
                        <p class="d1-p1">品牌</p>
                        <p class="d1-p2">{{item.name}}</p>
                        <p class="d1-p3">保准票</p>
                    </div>
                    <div class="context">
                        <svg v-for="(item2, index2) in xing" :key="index2" viewBox="0 0 32 32" width="12px"
                            height="12px" style="fill: orange">
                            <path
                                d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                                class="path1">
                            </path>
                        </svg>
                        <p class="d2-p1">评价：{{item.rating}}</p>
                        <p class="d2-p2">月售{{item.recent_order_num}}单</p>
                        <p class="d2-p3"> <span class="sp1">蜂鸟转送</span><span class="sp2">准时达</span> </p>
                    </div>
                    <div class="context">
                        <p class="d3-p1">￥20起送/{{item.piecewise_agent_fee.tips}}</p>
                        <p class="d3-p2">
                            <span class="sp1">{{item.distance}}</span>/
                            <span class="sp2">{{item.order_lead_time}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'msite',
        created() {
            this.getShopList()
        },
        beforeRouteUpdate(to, from, next) {
            this.id = to.query.id
            this.sortId = to.query.sortId
            this.getShopList()
            next();
        },
        data() {
            return {
                shop: [],
                xing: [1, 1, 1, 1, 1],
                id: undefined,
                sortId: undefined
            }
        },
        methods: {
            getShopList() {
                if (this.id == undefined && this.sortId == undefined) {
                    this.$axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762").then(result => {
                        this.shop = result.data
                    })
                }
                if (this.id != undefined && this.sortId == undefined) {
                    this.$axios.get(`https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&restaurant_category_id=&restaurant_category_ids[]=${this.id}`).then(result => {
                        this.shop = result.data
                    })
                }
                if (this.id == undefined && this.sortId != undefined) {
                    this.$axios.get(`https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&order_by=${this.sortId}`).then(result => {
                        this.shop = result.data
                    })
                }
            },
            setShop(shop) {
                this.$store.dispatch("setShopAsync", shop)
            }
        },
    }
</script>


<style scoped>
    .msite {
        margin-top: 0.12rem;
        background-color: #ffffff;
        border-top: 1px solid #cccccc;
        padding-top: 0.01rem;
    }

    .shop {
        overflow: hidden;
    }

    .img {
        width: 0.63rem;
        height: 0.63rem;
        float: left;
        margin-right: 0.1rem;
    }

    ul {
        list-style: none;
    }

    .img img {
        width: 100%;
        height: 100%;
    }

    .context {
        margin: 0.05rem 0;
        height: 0.2rem;
        line-height: 0.2rem;
    }

    li {
        margin: 0.13rem 0.13rem;
    }

    .shop div p {
        display: inline-block;
    }

    .d1-p1 {
        background-color: yellow;
        font-size: 0.1rem;
        margin-right: 0.1rem;
        position: absolute;

    }

    .d1-p2 {
        width: 1.7rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.16rem;
        margin-left: 0.5rem;
    }

    .d1-p3 {
        float: right;
        font-size: 0.03rem !important;
        color: #cccccc;
    }

    .d2-p1 {
        font-size: 0.1rem;

        color: orange
    }

    .d2-p2 {
        font-size: 0.07rem;
        padding-top: 0.05rem;
        color: #aaaaaa;
    }

    .d2-p3 {
        float: right;
        font-size: 0.12rem;
        padding-top: 0.05rem;
        color: #ffffff;

    }

    .d2-p3 .sp1 {
        background-color: rgb(0, 119, 255);
        padding: 0.02rem;
    }

    .d2-p3 .sp2 {
        color: rgb(0, 119, 255);
        padding: 0.02rem;
        border: 1px solid #aaaaaa;
    }

    .d3-p1 {
        font-size: 0.09rem;
    }

    .d3-p2 {
        font-size: 0.09rem;
        float: right;
    }

    .d3-p2 .sp1 {
        font-size: 0.09rem;
        color: #aaaaaa
    }

    .d3-p2 .sp2 {
        font-size: 0.09rem;
        color: rgb(0, 119, 255);
    }
</style>