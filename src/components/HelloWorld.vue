<template>
    <div class="hello">
        <h1>Welcome to Your Vue.js App</h1>
        <h2>Essential Links</h2>
        <div>
            <input  class="acc" placeholder="请输入账号" v-model="account">
            <input  class="acc" type="password"  placeholder="请输入密码" v-model="password">
            <button class="acc" type="submit"  @click="addUser">新增用户</button>
        </div>
    </div>
</template>

<style>
    .acc{
        display: block;
        margin: 0 auto;
        margin-top: 20px;
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
            }).catch((reject) => {
                console.log(reject)
            })
        }
    }
}
</script>