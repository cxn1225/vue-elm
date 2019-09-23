<template>
    <div class="onefood">
        <div class="header">
            <h3><span @click="$router.go(-1)" style="float: left">&nbsp;<img src="../../images/左箭头.png"
                        alt="左箭头" />&nbsp;</span> {{food.name}}</h3>
        </div>
        <div class="body">
            <div class="img">
                <img :src="'//elm.cangdu.org/img/'+ food.image_path" alt="">
            </div>
            <div class="context">
                <p style="font-size: 14px;">{{food.description}}</p>
                <p>{{food.name}}</p>
                <p>评分
                    <svg v-for="(item2, index2) in xing" :key="index2" viewBox="0 0 32 32" width="12px" height="12px"
                        style="fill: orange">
                        <path
                            d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                            class="path1">
                        </path>
                    </svg> &nbsp;
                    <span style="color: orange">{{food.rating}}</span></p>
                <p>月售{{food.month_sales}}单 <span style="color: orange">售价￥20 起</span></p>
                <p>评论数 {{food.rating_count}} 好评率{{food.satisfy_rate}}%</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'onefood',
        data() {
            return {
                food: {},
                xing: [1, 1, 1, 1, 1],
            }
        },
        created() {
            this.food = this.$route.query.food
            console.log(this.food)
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

    .body {
        padding-top: 0.45rem;
        background-color: #ffffff;
    }

    .body .img {
        width: 100%;
        height: 100vw;
        background-color: #ffffff;
    }

    .body .img img {
        width: 100%;
        height: 100%;
    }

    .context p {
        padding: 0.06rem 0.1rem;
    }
</style>