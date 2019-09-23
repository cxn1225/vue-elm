<template>
    <div class="shop">
        <div id="header">
            <ul>
                <router-link to="/searchshop" tag="li">搜索</router-link>
                <router-link to="/" tag="li">{{name}}</router-link>
                <router-link to="/profile" tag="li">用户</router-link>
            </ul>
        </div>
        <div id="body">
            <v-touch v-on:swipeleft="left = true" v-on:swiperight="left = false" tag="div">
                <div id="body-header" :class="{lb:left}">
                    <div class="ul1">
                        <ul>
                            <router-link :to="{name:'screenshop',query:{title:item.title}}" tag="li"
                                v-for="(item, index) in foodClassList.slice(0,8)" :key="item.id">
                                <img :src="'https://fuss10.elemecdn.com' + item.image_url" width="40px" height="40px"
                                    alt=""><br>
                                {{item.title}}
                            </router-link>
                        </ul>
                    </div>
                    <div class="ul2">
                        <ul>
                            <router-link :to="{name:'screenshop',query:{title:item.title}}" tag="li"
                                v-for="(item, index) in foodClassList.slice(8,17)" :key="item.id">
                                <img :src="'https://fuss10.elemecdn.com' + item.image_url" width="40px" height="40px"
                                    alt=""><br>
                                {{item.title}}
                            </router-link>
                        </ul>
                    </div>
                </div>
            </v-touch>
        </div>
        <msite />
        <app-footer />
    </div>
</template>

<script>
    import footer from "../components/footer/footer"
    import msite from "../page/msite/msite"
    export default {
        name: 'shop',
        components: {
            "app-footer": footer,
            msite
        },
        data() {
            return {
                foodClassList: [],
                left: false,
                name: ""
            }
        },
        created() {
            this.getFoodClassList()
            setTimeout(() => {
                this.name = localStorage.getItem("cityName")
            }, 500);

        },
        methods: {
            getFoodClassList() {
                this.$axios.get("https://elm.cangdu.org/v2/index_entry").then(result => {
                    this.foodClassList = result.data
                })
            },
        },
    }
</script>


<style scoped>
    #header {
        width: 100%;
        height: 0.45rem;
        background-color: rgb(0, 140, 255);
        color: #ffffff;
        position: fixed;
        z-index: 100;
        font-size: 0.16rem
    }

    #header ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    #header li {
        padding: 10px 15px;
    }

    #body {
        width: 100%;
        overflow: hidden;
        background-color: #ffffff;
        height: 1.9rem;
        border-bottom: 1px solid #cccccc;
        padding-top: 0.45rem;
        font-size: 0.15rem;
    }

    #body-header {
        position: relative;
        width: 200%;
        overflow: hidden;
    }

    .ul1 {
        width: 50%;
        float: left;
    }

    .ul2 {
        width: 50%;
        float: left;
    }

    #body-header ul {
        list-style: none;
        width: 100%;
        overflow: hidden;
    }

    #body-header li {
        width: 25%;
        float: left;
        text-align: center;
        padding: 0.1rem 0;
    }

    .lb {
        left: -375px !important;
    }
</style>