<template>
    <div class="security">
        <div class="header">
            <h3><span @click="$router.go(-1)" style="float: left">&nbsp;《 &nbsp;</span> 食品监督安全公示</h3>
        </div>
        <div class="body">
            <div class="d1">
                <h4>食品监督安全公示</h4>
            </div>
            <div class="d2">
                <img class="img" src="../../assets/笑脸.png" alt="">
                <p>监督检查结果：<span style="color: rgb(21, 128, 0)">良好</span><br></p>
                <p>检查日期：</p>
            </div>
        </div>
        <div class="body2">
            <h4>工商登记信息</h4>
            <p>企业名称</p>
            <p>工商执照注册号</p>
            <p>注册资本</p>
            <p>注册地址</p>
            <p>属地管理所</p>
            <p>法定代表人</p>
            <p>经营范围</p>
        </div>
        <div class="body2">
            <h4>餐饮许可证</h4>
            <p>营业范围</p>
            <p>许可证有效期</p>
            <p>许可证账号</p>
            <p>发证时间</p>
            <p>发证机关</p>
        </div>
        <div class="footer">
            <h4>许可证书</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'security',

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

    .body h4 {
        float: left;
        padding-left: 0.1rem;
    }

    .body h5 {
        float: right;
        padding-right: 0.1rem;
        color: #aaaaaa
    }

    .body .d1 {
        overflow: hidden;
        border-bottom: 1px solid #cccccc;
        padding: 0.1rem 0;
    }

    .body .d2 {
        height: 0.32rem;
        padding: 0.2rem 0.2rem;
    }

    .body .d2 .img {
        display: inline-block;
        float: left;
        margin-right: 0.2rem;
    }

    .body .d2 p {
        font-size: 0.14rem;
    }

    .body2 {
        margin-top: 0.1rem;
        background-color: #ffffff;
    }

    .body2 h4 {
        padding: 0.1rem 0.15rem;
        border-bottom: 1px solid #cccccc;
    }

    .body2 p {
        padding: 0.08rem 0.2rem;
        font-size: 0.14rem;
    }

    .footer {
        margin-top: 0.1rem;
        background-color: #ffffff;
    }

    .footer h4 {
        padding: 0.2rem 0.24rem; 
    }
</style>