<template>
    <div class="searchshop">
        <div class="header">
            <h3><span @click="$router.go(-1)" style="float: left">&nbsp;<img src="../images/左箭头.png"
                        alt="左箭头" />&nbsp;</span> 搜索</h3>
        </div>
        <div class="inp">
            <input type="text" placeholder="请输入商品或者美食名称" v-model="history">
            <button @click="submit">提交</button>
        </div>
        <div class="history" v-if="history == ''">
            <h5 v-if="historyList.length != 0">搜索历史</h5>
            <ul>
                <li v-for="(item, index) in historyList" :key="index">{{item}} <span
                        @click="deleteHistory(index)">×</span></li>
            </ul>
            <h4 v-if="historyList.length != 0" @click="clearHistory">清空历史记录</h4>
        </div>
        <app-footer />
    </div>

</template>

<script>
    import footer from "../components/footer/footer"
    export default {
        name: 'searchshop',
        components: {
            "app-footer": footer
        },
        created() {
            // this.historyList = this.$store.getters.historyList
            this.historyList = JSON.parse(localStorage.getItem("history")) || []
        },
        data() {
            return {
                history: "",
                historyList: []
            }
        },
        methods: {
            submit() {
                this.historyList.push(this.history)
                //this.$store.dispatch("setHistoryList", this.historyList)
                localStorage.setItem("history", JSON.stringify(this.historyList))
            },
            deleteHistory(index) {
                this.historyList.splice(index, 1)
                localStorage.setItem("history", JSON.stringify(this.historyList))
            },
            clearHistory() {
                this.historyList = []
                localStorage.setItem("history", JSON.stringify(this.historyList))
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

    .inp {
        width: 100%;
        padding: 0.55rem 0.1rem 0.1rem 0.1rem;
        background-color: #ffffff;
        box-sizing: border-box
    }

    .inp input {
        width: 70%;
        height: 0.25rem;
        background-color: #dedede;
        padding: 0.05rem;
        border-radius: 0.05rem;
        border: 0;
        margin-right: 0.05rem;
    }

    .inp button {
        width: 25%;
        height: 0.33rem;
        border: 0;
        background-color: rgb(0, 110, 255);
        border-radius: 0.05rem;
        color: #ffffff;
    }

    .history h5 {
        padding: 0.15rem 0.1rem;
    }

    .history li {
        padding: 0.13rem 0.1rem;
        border-bottom: 1px solid #dddddd;
        background-color: #ffffff;
    }

    .history h4 {
        padding: 0.17rem 0.1rem;
        text-align: center;
        color: rgb(0, 68, 255);
        background-color: #ffffff;
    }

    .history span {
        float: right;
        margin-right: 0.1rem;
        display: inline-block;
    }
</style>