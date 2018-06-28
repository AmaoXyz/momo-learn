<template>
    <div id = 'bg'>
        <div id = 'sss'>
            <div style = "background: aqua;border-radius: 2px;padding: 15px 15px">后台登陆管理系统</div>
            <div style="margin-top: 15px;">
                <el-input placeholder="请输入内容" v-model="account">
                    <template slot="prepend">账号</template>
                </el-input>
            </div>
            <div style="margin-top: 15px;">
                <el-input placeholder="请输入内容" v-model="password">
                    <template slot="prepend">密码</template>
                </el-input>
            </div>
            <el-button class="acc1" type="primary"  @click="addUser" style="margin-top: 15px;">注册</el-button>
            <el-button class="acc1" type="primary"  @click="login" >登陆</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                account: '',
                password: '',
            }
        }
    }
</script>

<style scoped>
    #bg{
        background: darkgrey;
        margin: 0 auto;
        border-radius: 5px;
    }

    #sss{
        padding: 20px 20px;
        width:400px;
        background: ghostwhite;
        margin: 0 auto;
        border-radius: 5px;
    }
    .acc1{
        padding-left: 30px;
        padding-right: 30px;
        margin: 0 30px;
    }
</style>