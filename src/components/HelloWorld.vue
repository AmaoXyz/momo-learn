<template>
    <div class="hello">
        <div class="kuai">
            <div>
                <input  class="acc" placeholder="请输入账号" v-model="account">
                <input  class="acc" type="password"  placeholder="请输入密码" v-model="password">
            </div>
            <div>
                <button class="acc1" type="submit"  @click="addUser">注册</button>
                <button class="acc1" type="submit"  @click="login">登陆</button>
            </div>
        </div>
    </div>
</template>

<style>
    .acc{
        display: block;
        margin: 0 auto;
    }
    .acc1{
        margin: 0 10px;
    }

    h1,h2{
        color: grey;
    }

    .kuai{
        width: 200px;
        height: 200px;
        margin: 0 auto;
        padding-top: 200px;
    }

    .hello{
        background: url("../assets/timg.png");
        width: 1920px;
        height: 1200px;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                account: '',
                password: ''
            }
        },
        methods : {
            addUser() {
                this.$http.post('/api/register', {account : this.account,password : this.password}).then((response) => {
                    console.log('---------------->>>',response.body)
                    alert(response.body.msg)
                }).catch((reject) => {
                    console.log(reject)
                })
            },
            login(){
                this.$http.post('/api/login', {account : this.account,password : this.password}).then((response) => {
                    alert(response.body.msg)
                    // 登陆成功后 界面跳转
                    if (response.body.code == 1){

                    }
                }).catch((reject) => {
                    console.log(reject)
                })
            }
        }
    }
</script>