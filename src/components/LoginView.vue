<template>
    <div class="Login">
        <div class="kuai1">
            <button class="acc1" type="submit"  @click='goto'>返回主界面</button>
        </div>
    </div>
</template>

<style>
    .acc1{
        margin: 10px 30px;
        width: 100px;
        height: 40px;
    }

    .kuai1{
        width: 500px;
        margin: 0 auto;
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .Login{
        background: url("../assets/timg.png");
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>

<script>
    export default {
        name : 'login',
        data() {
            return {

            }
        },
        methods : {
            goto :function () {
                this.$router.push('Lobby')
            }
        },

    }
</script>
