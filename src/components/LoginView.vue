<template>
    <div class="Login">
        <div class="kuai1">
            <button class="acc1" type="submit"  @click='copy'>返回主界面</button>
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
                text : '12313123123'
            }
        },
        methods : {
            goto :function () {
                this.$router.push('Lobby')
            },
            copy:function (str){
                var save = function (e){
                    e.clipboardData.setData('text/plain',str);//下面会说到clipboardData对象
                    e.preventDefault();//阻止默认行为
                }
                document.addEventListener('copy',save);
                document.execCommand("copy");//使文档处于可编辑状态，否则无效
            }
        },
    }
</script>
