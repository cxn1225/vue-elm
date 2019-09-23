<template>
    <div class="comment">
        <div class="comment1">
            <div class="left">
                <p class="p1">{{comment1.food_score | IntFloor}}</p>
                <p class="p2">综合评价</p>
                <p class="p3">高于周边商家{{comment1.compare_rating | IntTwo}}%</p>
            </div>
            <div class="right">
                <p>服务态度&nbsp;&nbsp;
                    <svg v-for="(item, index) in xing" :key="index" viewBox="0 0 32 32" width="12px" height="12px"
                        style="fill: orange">
                        <path
                            d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                            class="path1">
                        </path>
                    </svg>
                    &nbsp;&nbsp;
                    <span>{{comment1.service_score | IntCeil }}</span></p>
                <p>菜品评价&nbsp;&nbsp;
                    <svg v-for="(item, index) in xing" :key="index" viewBox="0 0 32 32" width="12px" height="12px"
                        style="fill: orange">
                        <path
                            d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                            class="path1">
                        </path>
                    </svg>
                    &nbsp;&nbsp;
                    <span>{{comment1.overall_score | IntCeil}}</span></p>
                <p>送达时间&nbsp;&nbsp;{{comment1.deliver_time}}分钟</p>
            </div>
        </div>
        <div class="comment2">
            <ul>
                <li v-for="(item, index) in comment2" :key="index" :class="{baccolor:!item.unsatisfied}">
                    {{item.name}}({{item.count}})
                </li>
            </ul>
        </div>
        <div class="comment3" v-for="(item1, index1) in comment3" :key="item1._id">
            <div class="img">
                <img src="../../assets/head.jpg" alt="">
            </div>
            <div class="context">
                <p style="font-size: 10px;">{{item1.username}}</p>
                <svg v-for="(item2, index2) in xing" :key="index2" viewBox="0 0 32 32" width="12px" height="12px"
                    style="fill: orange">
                    <path
                        d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                        class="path1">
                    </path>
                </svg><br>
                <span v-for="(item3, index3) in item1.item_ratings" :key="item3._id">
                    {{item3.food_name}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'comment',
        data() {
            return {
                shopId: 0,
                xing: [1, 1, 1, 1, 1],
                comment1: {},
                comment2: [],
                comment3: []
            }
        },
        created() {
            this.getComment()
        },
        methods: {
            getComment() {
                this.shopId = this.$route.query.id

                this.$axios.get(`https://elm.cangdu.org/ugc/v2/restaurants/${this.shopId}/ratings/scores`).then(result => {
                    this.comment1 = result.data
                })
                this.$axios.get(`https://elm.cangdu.org/ugc/v2/restaurants/${this.shopId}/ratings/tags`).then(result => {
                    this.comment2 = result.data
                })
                this.$axios.get(`https://elm.cangdu.org/ugc/v2/restaurants/${this.shopId}/ratings`).then(result => {
                    this.comment3 = result.data
                })
            }
        },
        filters: {
            IntFloor(value) {
                return Math.floor(value * 10) / 10
            },
            IntCeil(value) {
                return Math.ceil(value * 10) / 10
            },
            IntTwo(value) {
                return Math.round(value * 1000) / 10
            },
        }

    }
</script>


<style scoped>
    .comment1 {
        width: 100%;
        overflow: hidden;
    }

    .comment1 .left {
        float: left;
        width: 45%;
        text-align: center;
        padding: 0.15rem 0;
    }

    .left .p1 {
        font-size: 0.3rem;
        color: rgb(230, 28, 28);
    }

    .left .p3 {
        font-size: 0.1rem;
        color: #333
    }

    .comment1 .right {
        float: left;
        width: 55%;
        padding: 0.15rem 0;
    }

    .right p {
        padding: 0.02rem 0;
        padding-left: 0.1rem;
    }

    .right span {
        color: rgb(230, 28, 28);
    }

    .comment2 {
        border-top: 0.15rem solid #eeeeee;
        padding: 0.12rem;
    }

    .comment2 ul {
        list-style: none;
    }

    .comment2 li {
        display: inline-block;
        padding: 0.03rem;
        border-radius: 0.03rem;
        margin: 0.02rem 0.04rem;
        background-color: #eeeeee;
    }

    .baccolor {
        background-color: #cccccc !important;
    }

    .comment3 {
        margin: 0 0.12rem;
        border-top: 1px solid #cccccc;
        padding: 0.15rem 0;
        overflow: hidden;
    }

    .comment3 .img {
        width: 0.4rem;
        height: 0.4rem;
        float: left;
        border-radius: 50%;
    }

    .img img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .comment3 .context {
        float: left;
        margin-left: 0.15rem;

    }

    .context span {
        display: inline-block;
        padding: 0.02rem;
        border: 1px solid #cccccc;
        border-radius: 0.03rem;
        width: 0.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0 0.02rem;
    }
</style>