<template>
    <div class="Lobby">
        <div class="kuai">
            <div>
                <input  class="acc" placeholder="请输入账号" v-model="account">
                <input  class="acc" type="password"  placeholder="请输入密码" v-model="password">
            </div>
            <div>
                <el-button class="acc1" type="primary"  @click="addUser" >~注册~</el-button>
                <el-button class="acc1" type="primary"  @click="login" >~登陆~</el-button>
            </div>
        </div>
    </div>
</template>

<style>
    .acc{
        display: block;
        margin: 10px auto;
        width: 300px;
        height: 40px;
    }
    .acc1{
        margin: 10px 30px;
        width: 100px;
        height: 40px;
    }

    h1,h2{
        color: grey;
    }

    .kuai{
        width: 500px;
        margin: 0 auto;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .Lobby{
        background: url("../assets/timg.png");
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>

<script>
    export default {
        name: 'Lobby',
        data() {
            return {
                account: '',
                password: '',
            }
        },
        methods : {
            addUser() {
                if (this.account == ''){
                    this.$message({type: 'error', message: '请输入用户名'});
                    return
                }
                if (this.password == ''){
                    this.$message({type: 'error', message: '请输入密码'});
                    return
                }
                this.$root.eventHub.$emit('showLoading', {})
                this.$http.post('/api/register', {account : this.account,password : this.password}).then((response) => {
                    this.$message({type: 'success', message: response.body.msg});
                    this.$root.eventHub.$emit('hideLoading', {})
                }).catch((reject) => {
                    console.log(reject)
                    this.$root.eventHub.$emit('hideLoading', {})
                })
            },
            login(){
                if (this.account == ''){
                    this.$message({type: 'error', message: '请输入用户名'});
                    return
                }
                if (this.password == ''){
                    this.$message({type: 'error', message: '请输入密码'});
                    return
                }

                this.$root.eventHub.$emit('showLoading', {})
                this.$http.post('/api/login', {account : this.account,password : this.password}).then((response) => {
                    this.$message({type: 'success', message: response.body.msg});
                    // 登陆成功后 界面跳转
                    if (response.body.code == 1){
                        this.$router.push('login')
                    }
                    this.$root.eventHub.$emit('hideLoading', {})
                }).catch((reject) => {
                    console.log(reject)
                    this.$root.eventHub.$emit('hideLoading', {})
                })
            }
        }
    }
</script>