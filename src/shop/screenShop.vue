<template>
    <div class="screenshop">
        <div class="header">
            <h3><span @click="$router.go(-1)" style="float: left">&nbsp;<img src="../images/左箭头.png"
                        alt="左箭头" />&nbsp;</span> {{title}}</h3>
        </div>
        <div class="select">
            <ul class="ul1">

                <li class="li1" @click="showFood">
                    <span v-if="isClick">分类</span>
                    <span v-else>{{title}}</span>

                </li>
                <li class="li1" @click="showSort">
                    排序

                </li>
                <li class="li1" style="border-right: 0" @click="showScreen">
                    筛选

                </li>
            </ul>
        </div>
        <div class="food">
            <div class="left">
                <ul>
                    <li v-for="(item, index) in scrren" :key="index" @click="liColor(index)"
                        :class="{liColor:liIndex == index}">
                        {{item.name}} <span>{{item.count}} ></span>
                    </li>
                </ul>
            </div>
            <div class="right">
                <ul>
                    <router-link tag="li" :to="{name:'msite',query:{id:item.id}}"
                        v-for="(item, index) in oneFood.sub_categories" :key="index">
                        <span @click="updateTitle(item.name); showFood()">{{item.name}}</span> <span
                            class="sp2">{{item.count}}</span>
                    </router-link>
                </ul>
            </div>
        </div>
        <div class="sort">
            <ul>
                <router-link tag="li" :to="{name:'msite',query:{sortId:index}}" @click.native="showSort"
                    v-for="(item, index) in sorts" :key="index">{{item}}</router-link>
            </ul>
        </div>
        <div class="screen">
            <div class="screen1">
                <p>配送方式</p>
                <ul>
                    <li>蜂鸟转送</li>
                </ul>
            </div>
            <div class="screen2">
                <p>商家属性（可以多选）</p>
                <ul>
                    <li v-for="(item, index) in screen2" :key="index">
                        <span class="sp1"
                            :style="'color:#' + item.icon_color + ';border:1px solid #'+item.icon_color">{{item.icon_name}}</span><span
                            class="sp2">{{item.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="bt">
                <button style="background-color: #ffffff">清空</button>
                <button style="background-color: rgb(23, 192, 23);color: #ffffff" @click="showScreen">确定</button>
            </div>
        </div>
        <div class="footer">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import msite from '../page/msite/msite'
    export default {
        name: 'screenshop',
        data() {
            return {
                title: "",
                scrren: [],
                screen2: [],
                liIndex: 0,
                oneFood: {},
                isClick: false,
                sorts: ["智能排序", "距离最近", "销量最高", "起送价最低", "配送速度最快", "评分最高"]
            }
        },
        components: {
            msite
        },
        created() {
            this.title = this.$route.query.title
            this.getScrren()
        },
        methods: {
            getScrren() {
                this.$axios.get("https://elm.cangdu.org/shopping/v2/restaurant/category").then(result => {
                    this.scrren = result.data
                    this.oneFood = this.scrren[0]
                })

                this.$axios.get("https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes").then(result => {
                    this.screen2 = result.data
                })
            },
            showFood() {
                $(".sort").slideUp()
                $(".screen").slideUp()
                $(".food").slideToggle()
                this.isClick = !this.isClick
            },
            showSort() {
                $(".sort").slideToggle()
                $(".screen").slideUp()
                $(".food").slideUp()
            },
            showScreen() {
                $(".sort").slideUp()
                $(".screen").slideToggle()
                $(".food").slideUp()
            },
            liColor(index) {
                this.liIndex = index
                this.oneFood = this.scrren[index]
            },
            updateTitle(name) {
                this.title = name
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

    .select {
        padding-top: 0.45rem;
        position: fixed;
        width: 100%;
        z-index: 3;
    }

    .ul1 {
        overflow: hidden;
    }

    .li1 {
        width: 33%;
        list-style: none;
        float: left;
        text-align: center;
        border-right: 1px solid #cccccc;
        background-color: #ffffff;
        padding: 0.1rem 0;
    }

    .food {
        width: 100%;
        position: fixed;
        display: none;
        top: 0.85rem;
        overflow: hidden;
        z-index: 2;
    }

    .food .left {
        float: left;
        width: 50%;
        background-color: #eeeeee
    }

    .left li {
        padding: 0.1rem;
    }

    .left span {
        float: right;
        color: #aaaaaa;
    }

    .liColor {
        background-color: #ffffff
    }

    .food .right {
        float: left;
        width: 50%;
        height: 3.69rem;
        overflow: scroll;
        background-color: #ffffff;
    }

    .right ul {
        list-style: none;
    }

    .right li {
        padding: 0.1rem;
        border-bottom: 1px solid #cccccc
    }

    .right .sp2 {
        float: right;
    }

    .sort {
        width: 100%;
        background-color: #ffffff;
        position: fixed;
        display: none;
        top: 0.85rem;
        z-index: 2;
    }

    .sort ul {
        list-style: none;
    }

    .sort li {
        padding: 0.2rem 0.4rem;
        border-bottom: 1px solid #cccccc
    }

    .screen {
        width: 100%;
        position: fixed;
        display: none;
        top: 0.85rem;
        z-index: 2;
        background-color: #ffffff;
        font-size: 0.12rem;
    }

    .screen ul {
        overflow: hidden;
        list-style: none;
    }

    .screen li {
        float: left;
        width: 25%;
        margin: 0.05rem;
        padding: 0.05rem;
        border: 1px solid #eeeeee;
        text-align: center;
    }

    .screen1,
    .screen2 {
        padding-left: 0.1rem;
    }

    .screen2 .sp1 {
        margin-right: 0.05rem;
        display: inline-block;
        padding: 0.01rem;
    }

    .screen p {
        padding: 0.08rem 0;
    }

    .bt {
        padding: 0.1rem;
        background-color: #eeeeee;
    }

    .bt button {
        width: 48%;
        display: inline-block;
        padding: 0.08rem 0.1rem;
        margin: 0 0.02rem;
        border: 0;
        border-radius: 0.05rem;
        font-size: 0.19rem;
    }

    .footer {
        padding-top: 0.7rem;
    }
</style>