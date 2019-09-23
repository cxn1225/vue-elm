<template>
    <div class="alet_container">
        <div class="tip_text_container">
            <p class="tip_text">{{alertText}}</p>
            <div class="confrim" @click="closeTip">确认</div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                positionY: 0,
                timer: null,
            }
        },
        mounted() {

        },
        props: ['alertText'],
        methods: {
            closeTip() {
                this.$emit('closeTip')
            }
        }
    }
</script>


<style scoped>
    @keyframes tipMove {
        0% {
            transform: scale(1)
        }

        35% {
            transform: scale(.8)
        }

        70% {
            transform: scale(1.1)
        }

        100% {
            transform: scale(1)
        }
    }

    .alet_container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 200;
    }

    .tip_text_container {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -1.38rem;
        margin-left: -1.38rem;
        width: 2.76rem;
        animation: tipMove .4s;
        background-color: #fff;
        border: 1px;
        padding-top: .138rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px;
        border-radius: 0.0575rem;
    }

    .tip_text {
        line-height: .207rem;
        text-align: center;
        margin-top: .184rem;
        padding: 0.092rem;
        font-size: 0.161rem
    }

    .confrim {
        font-weight: bold;
        margin-top: .184rem;
        background-color: #4cd964;
        width: 100%;
        text-align: center;
        line-height: 0.414rem;
        font-size: .207rem;
        color: #fff;
        border: 1px;
        border-bottom-left-radius: 0.0575rem;
        border-bottom-right-radius: 0.0575rem;
    }
</style>