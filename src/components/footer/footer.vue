<template>
    <div class="footer">
        <ul>
            <router-link to="/shoplist" tag="li">
                <img src="../../assets/外卖.png" alt="" width="20px" height="20px"><br>
                外卖
            </router-link>
            <router-link to="/searchshop" tag="li">
                <img src="../../assets/搜索.png" alt="" width=" 20px" height="20px"><br>
                搜索</router-link>
            <router-link to="/orders" tag="li">
                <img src="../../assets/订单.png" alt="" width="20px" height="20px"><br>
                订单</router-link>
            <router-link to="/profile" tag="li">
                <img src="../../assets/我的.png" alt="" width="20px" height="20px"><br>
                我的</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'app-footer',

    }
</script>


<style scoped>
    .footer {
        position: fixed;
        width: 100%;
        height: 0.2rem;
        bottom: 0.34rem;
        background-color: rgba(255, 255, 255, 1);
        z-index: 100000;
    }

    .footer ul {
        list-style: none;
        width: 100%;
        overflow: hidden;
    }

    .footer li {
        float: left;
        width: 25%;
        text-align: center;
        background-color: #ffffff;
        padding: 0.05rem 0;
    }

    .router-link-exact-active {
        color: aqua !important;
    }
</style>