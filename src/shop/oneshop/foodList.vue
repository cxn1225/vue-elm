<template>
    <div class="footlist">
        <div class="left">
            <ul>
                <li class="left-li" v-for="(item, index) in foodList" :key="index" @click="addborder(index)"
                    :class="{addborder:num == index}">
                    <a :href="'#' + item.name">{{item.name}}</a>
                </li>
            </ul>
        </div>
        <div class="right">
            <ul v-for="(item, index1) in foodList" :key="index1">
                <li :id="item.name" class="li1"><span class="sp1">{{item.name}}</span><span
                        class="sp2">{{item.description}}</span></li>
                <router-link tag="li" :to="{name:'onefood',query:{food:food}}" class="li2"
                    v-for="(food, index2) in item.foods" :key="index2">
                    <div class="img">
                        <img :src="'//elm.cangdu.org/img/'+food.image_path" alt="">
                    </div>
                    <div class="context">
                        <p class="p1">{{food.name}}</p>
                        <p class="p2">{{food.description}}</p>
                        <p class="p3"><span
                                style="margin-right: 0.05rem">{{food.tips | sliceStr}}</span><span>好评率{{food.satisfy_rate}}%</span>
                        </p>
                        <p class="p4">
                            <span>￥20起</span>
                            <span class="sp1" style="float: right" v-if="food.specfoods.length == 1"
                                @click.prevent="addShopCar(food,0)">+</span>
                            <span class="sp2" style="float: right" v-else
                                @click.prevent="getOneGuide(index1,index2)">选规格
                            </span>
                        </p>
                    </div>
                    <div class="cover" v-if="showGuide">
                        <div class="guide">
                            <p class="p1">{{oneGuide.name}} <span style="float: right"
                                    @click.prevent="showGuide = false">×</span></p>
                            <p class="p2">规格</p>
                            <ul>
                                <li v-for="(specfood, index) in oneGuide.specfoods" :key="index"
                                    :class="{inguide:index == guideIndex}" @click.native="inguide(index)">
                                    <span @click.prevent="inguide(index)">{{specfood.specs_name}}</span>
                                </li>
                            </ul>
                            <p class="p3">￥{{onePrice}} <span><button
                                        @click.prevent="addShopCar(oneGuide)">加入购物车</button></span></p>
                        </div>
                    </div>
                </router-link>
            </ul>
        </div>
        <div class="shopcar">
            <div class="left">
                <p class="p1">￥{{totalPrice}}</p>
                <p class="p2">配送费￥5</p>
            </div>
            <div class="right">
                <p class="p1" v-if="totalPrice < 20">还差￥20起送</p>
                <p class="p2" v-else>
                    <router-link tag="button" :to="{name:'pay',query:{shopCar:shopCar}}">去结算</router-link>
                </p>
            </div>
        </div>
        <div @click="showCar = !showCar" class="car" :class="{carBac:totalNumber != 0}">
            <img src="../../assets/shopcar.png" alt="">
        </div>
        <div class="number" v-if="totalNumber != 0">{{totalNumber}}</div>
        <div v-if="showCar" class="showshopcar">
            <h5 style="overflow: hidden"><span style="float: left;">购物车</span> <span @click="clearFood"
                    style="float: right">清空</span></h5>
            <ul>
                <li v-for="(item, index) in shopCar" :key="index">
                    <p class="p1"><span>{{item.name}}</span> <br> <span style="font-size: 0.12rem">{{item.guide}}</span>
                    </p>
                    <p class="p2">￥{{item.price}}</p>
                    <p class="p3"><span @click="reduceFood(index)" class="sp1">-</span> {{item.number}} <span
                            @click="addFood(index)" class="sp2">+</span></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'footlist',
        data() {
            return {
                foodList: [],
                num: 0,
                shopId: 0,
                showGuide: false,
                oneGuide: {},
                guideIndex: 0,
                shopCar: [],
                totalPrice: 0,
                totalNumber: 0,
                showCar: false,
                onePrice: 0
            }
        },
        created() {
            this.getOneShop()
        },
        methods: {
            getOneShop() {
                this.shopId = this.$route.query.id
                this.$axios.get(`http://elm.cangdu.org/shopping/v2/menu?restaurant_id=${this.shopId}`).then(result => {
                    this.foodList = result.data
                }).catch(err => {
                    console.log(err.data)
                })
            },
            addborder(index) {
                this.num = index
                console.log(this.num)
            },
            getOneGuide(id1, id2) {
                this.guideIndex = 0
                this.oneGuide = this.foodList[id1].foods[id2]
                this.onePrice = this.oneGuide.specfoods[this.guideIndex].price
                this.showGuide = true
            },
            inguide(index) {
                this.guideIndex = index;
                this.onePrice = this.oneGuide.specfoods[this.guideIndex].price
            },
            addShopCar(food, i) {
                if (i != undefined) {
                    this.guideIndex = 0
                }

                const obj = {
                    name: food.name,
                    guide: food.specfoods[this.guideIndex].specs_name,
                    number: 1,
                    price: food.specfoods[this.guideIndex].price
                }
                var hasFood = false
                for (var i = 0; i < this.shopCar.length; i++) {
                    if (this.shopCar[i].name == obj.name && this.shopCar[i].guide == obj.guide) {
                        hasFood = true
                        this.shopCar[i].number++
                        break
                    }
                }
                if (!hasFood) {
                    this.shopCar.push(obj)
                }
                var totalNumber = 0
                var totalPrice = 0
                for (var i = 0; i < this.shopCar.length; i++) {
                    totalPrice += this.shopCar[i].price * this.shopCar[i].number
                    totalNumber += this.shopCar[i].number
                }
                this.totalNumber = totalNumber
                this.totalPrice = totalPrice

                this.showGuide = false
            },
            reduceFood(index) {
                if (this.shopCar[index].number >= 2) {
                    this.shopCar[index].number--
                } else {
                    this.shopCar.splice(index, 1)
                }
                var totalNumber = 0
                var totalPrice = 0
                for (var i = 0; i < this.shopCar.length; i++) {
                    totalPrice += this.shopCar[i].price * this.shopCar[i].number
                    totalNumber += this.shopCar[i].number
                }
                this.totalNumber = totalNumber
                this.totalPrice = totalPrice
            },
            addFood(index) {
                this.shopCar[index].number++
                var totalNumber = 0
                var totalPrice = 0
                for (var i = 0; i < this.shopCar.length; i++) {
                    totalPrice += this.shopCar[i].price * this.shopCar[i].number
                    totalNumber += this.shopCar[i].number
                }
                this.totalNumber = totalNumber
                this.totalPrice = totalPrice
            },
            clearFood() {
                this.shopCar = []
                this.totalNumber = 0
                this.totalPrice = 0
            }
        },
        filters: {
            sliceStr(value) {
                return value.split(" ")[1]
            }
        }
    }
</script>


<style scoped>
    .footlist {
        overflow: hidden;
    }

    .left {
        width: 26%;
        float: left;
        height: 5.2rem;
        overflow: scroll;
    }

    .left ul {
        list-style: none;
    }

    .left-li {
        padding: 0.2rem 0.1rem;
        border-left: 3px solid #ffffff;
        background-color: #ededed;
        border-bottom: 1px solid #cccccc;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .left-li:first {
        padding: 0.2rem 0.1rem;
        border-left: 3px solid blue;
        background-color: #ffffff;
        border-bottom: 1px solid #cccccc;
    }

    a {
        color: #333333;
        text-decoration: none
    }

    .addborder {
        border-left: 3px solid blue;
        background-color: #ffffff;
        border-bottom: 1px solid #cccccc;
    }

    .right {
        float: right;
        width: 74%;
        height: 5.2rem;
        overflow: scroll;
    }

    .right ul {
        list-style: none;
    }

    .right .li1 {
        height: 0.3rem;
        line-height: 0.3rem;
        background-color: #ededed;
        padding: 0.15rem 0.05rem;
        padding-bottom: 0.1rem;
    }

    .right .li2 {
        height: 1.18rem;
        padding: 0.1rem;
    }

    .sp1 {
        font-size: 0.16rem;
        margin-right: 0.05rem;
    }

    .sp2 {
        font-size: 0.1rem;
    }

    .img {
        width: 0.46rem;
        height: 0.46rem;
        float: left;
        padding-right: 0.1rem
    }

    .img img {
        width: 100%;
        height: 100%;
    }

    .context {
        float: left;
    }

    .context p {
        padding: 0.05rem 0;
    }

    .context .p1 {
        width: 1.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .context .p2,
    .context .p3,
    .context .p4 {
        font-size: 0.1rem;
    }

    .context .p4 {
        color: orange;
        width: 130%
    }

    .p4 .sp1 {
        display: inline-block;
        padding: 0.02rem 0.06rem;
        border-radius: 50%;
        background-color: rgb(77, 146, 236);
        color: #ffffff;
        font-size: 0.14rem;
    }

    .p4 .sp2 {
        display: inline-block;
        padding: 0.04rem 0.08rem;
        border-radius: 0.02rem;
        background-color: rgb(77, 146, 236);
        color: #ffffff;
        font-size: 0.12rem;
    }

    .cover {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(120, 120, 120, 0.1);
        opacity: 0.5;
    }

    .guide {
        position: absolute;
        width: 2rem;
        height: 1.5rem;
        background-color: #ffffff;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        border-radius: 0.05rem;
    }

    .guide .p1 {
        text-align: center;
        overflow: hidden;
        margin-bottom: 0.1rem;
        margin-top: 0.1rem;
    }

    .guide .p1 span {
        float: right;
        font-size: 0.2rem;
        padding-right: 0.05rem;
    }

    .guide .p2 {
        margin-bottom: 0.1rem;
        padding-left: 0.1rem
    }

    .guide ul {
        list-style: none;
        overflow: hidden;
        padding-bottom: 0.2rem;
        padding-left: 0.1rem
    }

    .guide li {
        padding: 0.1rem;
        border: 1px solid #cccccc;
        border-radius: 0.05rem;
        margin-right: 0.1rem;
        float: left;
        border-radius: 0.05rem;
    }

    .guide .p3 {
        padding: 0.16rem 0.1rem;
        color: rgb(255, 38, 0);
        background-color: #cccccc;
        font-weight: 600;
        overflow: hidden;
    }

    .guide .p3 span {
        float: right;
    }

    .guide .p3 button {
        color: #ffffff;
        background-color: rgb(38, 38, 156);
        padding: 0.05rem 0.08rem;
        border-radius: 0.05rem;
        border: 0;
    }

    .inguide {
        border: 1px solid rgb(34, 34, 158) !important;
        color: rgb(34, 34, 158);
    }

    .shopcar {
        position: fixed;
        background-color: #000000;
        width: 100%;
        height: 0.5rem;
        bottom: 0;
        color: #ffffff;
        overflow: hidden;
    }

    .shopcar .left {
        float: left;
        padding-left: 1rem;
        height: 0.5rem;
    }

    .shopcar .left .p1 {
        font-size: 0.18rem;
    }

    .shopcar .left .p2 {
        font-size: 0.12rem;
    }

    .shopcar .right {
        width: 30%;
        float: right;
        height: 0.5rem;
    }

    .shopcar .right .p1 {
        line-height: 0.5rem;
    }

    .shopcar .right button {
        width: 100%;
        height: 0.5rem;
        background-color: rgb(0, 128, 68);
        border: 0;
        font-size: 0.20rem;
        color: #ffffff;
    }

    .car {
        width: 0.55rem;
        height: 0.55rem;
        text-align: center;
        position: absolute;
        bottom: 0.1rem;
        left: 0.2rem;
        background-color: #000000;
        border: 4px solid #111111;
        border-radius: 50%;
        z-index: 100;
    }

    .car img {
        position: absolute;
        width: 0.35rem;
        height: 0.35rem;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }

    .number {
        position: absolute;
        width: 0.2rem;
        height: 0.2rem;
        text-align: center;
        background-color: red;
        border-radius: 50%;
        bottom: 0.56rem;
        left: 0.68rem;
        color: #ffffff;
        z-index: 100;
    }

    .carBac {
        background-color: rgb(0, 68, 255) !important
    }

    .showshopcar {
        position: absolute;
        bottom: 0.48rem;
        width: 100%;
        background-color: #ffffff;
    }

    .showshopcar h5 {
        padding: 0.1rem;
        background-color: #cccccc;
    }

    .showshopcar ul {
        list-style: none;
    }

    .showshopcar li {
        padding: 0.1rem;
    }

    .showshopcar .p1 {
        display: inline-block;
        width: 70%;
        font-size: 0.16rem;
    }

    .showshopcar .p2 {
        display: inline-block;
        width: 12%;
        color: rgb(255, 81, 0);
        font-weight: 600;
    }

    .showshopcar .p3 {
        display: inline-block;
        width: 18%;
        height: 0.2rem;
        line-height: 0.2rem;
    }

    .showshopcar .p3 span {
        display: inline-block;
        width: 0.18rem;
        height: 0.18rem;
        text-align: center;
        border-radius: 50%;
    }

    .showshopcar .p3 .sp1 {
        background-color: #ffffff;
        border: 1px solid rgb(0, 60, 255);
        color: rgb(0, 60, 255)
    }

    .showshopcar .p3 .sp2 {
        background-color: rgb(0, 60, 255);
        border: 1px solid rgb(0, 60, 255);
        color: #ffffff;
    }
</style>