<template>
    <header class="headers">
        <el-menu router :default-active="$route.path" class="el-menu" @open="handleOpen" @close="handleClose" theme="dark">
            <el-menu-item v-for="nn in navs" :index=nn.index>
                <samp>{{nn.lis}}</samp>
            </el-menu-item>
        </el-menu>
    </header>
</template>

<script>

    export default {
        name: "headers",
        data() {
            return {
                navs : [
                    {lis : '主页',index : 'login'},
                    {lis : '日志',index : 'login'},
                    {lis : '说说',index : 'login'},
                    {lis : '相册',index : 'login'},
                    {lis : '资料',index : 'login'},
                    {lis : '客服',index : 'login'},
                ]
            }
        },
    }
</script>

<style>
    .headers{
        height: 60px;
        background: darkgrey;
    }
    el-menu-item{
    }
    samp{
        color: red;
        /*margin: 0 auto;*/
    }
    li{
        list-style: none;
        float: left;
        /*float:left;*/
        /*width: 60px;*/
    }
</style>