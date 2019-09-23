<template>
    <div class="login">
        <div class="header">
            <h3><span @click="$router.go(-1)" style="float: left">&nbsp;<img src="../../images/左箭头.png"
                        alt="左箭头" />&nbsp;</span>密码登录</h3>
        </div>
        <div class="body">
            <input type="text" name="" id="" placeholder="账号" v-model="user.username">
            <input type="text" name="" id="" placeholder="密码" v-model="user.password">
            <input type="text" name="" id="" placeholder="验证码" v-model="user.captcha_code">
            <div class="yan">{{yan}} <span @click="huan" style="font-size: 12px;">换一张</span></div>
            <p>
                温馨提示：未注册过的账号，登录时将自动注册
            </p>
            <p>
                注册过的用户可凭账号密码登录
            </p>
            <button class="bt" @click="submitUser">登录</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'app-login',
        data() {
            return {
                yan: 0,
                user: {
                    username: "",
                    password: "",
                }
            }
        },
        created() {
           this.huan()
        },
        methods: {
            huan() {
                this.yan = Math.floor((Math.random() + 1) * 1000)
            },
            submitUser() {
                this.$axios.post("http://elm.cangdu.org/v2/login", this.user).then(result => {
                    console.log(result.data)
                })
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

    .body {
        padding-top: 0.55rem;
        background-color: #ffffff;
        position: relative;
    }

    .body input {
        width: 100%;
        height: 0.5rem;
        padding: 0.1rem 0.2rem;
        border: 0;
        border-bottom: 1px solid #cccccc;
        box-sizing: border-box
    }

    .yan {
        width: 2rem;
        height: 0.5rem;
        position: absolute;
        font-size: 0.3rem;
        text-align: center;
        right: 0rem;
        top: 1.6rem;
    }

    .bt {
        width: 90%;
        margin: 0.1rem 5%;
        padding: 0.08rem 0;
        border: 0;
        border-radius: 0.05rem;
        color: #ffffff;
        background-color: rgb(0, 128, 38)
    }

    .body p {
        color: red;
        padding: 0.1rem;
        font-size: 0.12rem;
    }
</style>