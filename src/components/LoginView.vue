<template>
  <div>
    <h1 style="color: orangered;">社会人社区</h1>
    <h2 style="color: orangered;">~~~欢迎大家来搞基~~~</h2>
    <div style="padding-top: 20px">
      <label style="color:red;font-size: 16px">账号</label>
      <input class="acc" placeholder="请输入账号" v-model="account">
    </div>
    <div style="padding-top: 20px">
      <label style="color:blue;font-size: 16px">密码</label>
      <input type="password" class="pass" placeholder="请输入密码" v-model="password">
    </div>

    <div style="padding-top: 20px">
      <button type="submit" class="btn" @click="login">登录</button>
      <button type="submit" class="btn" @click="register">注册</button>
      <button type="submit" class="btn" @click="getAllAccount">测试</button>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        account: '',
        password: ''
      }
    },
    methods: {
      login() {
        let params = {
          account: this.account,
          password: this.password
        }
        this.$http.post('/api/user/login', params)
          .then((response) => {
            console.log(response)
            var message = response.body.message
            if (response.body.status === 1000) {
              message = response.body.data[0].account + ' ' + message
            }
            alert(message)
          })
          .catch((reject) => {
            console.log(reject)
          })
      },
      register() {
        let params = {
          account: this.account,
          password: this.password
        }
        this.$http.post('/api/user/register', params)
          .then((response) => {
            console.log(response)
            var message = response.body.message
            if (response.body.status === 1000) {
              message = this.account + ' ' + message
            }
            alert(message)
          })
          .catch((reject) => {
            console.log(reject)
          })
      },
      getAllAccount() {
        console.log('call getAllAccount')
        this.$http.get('/api/user/all')
          .then((response) => {
            console.log(response)
          })
          .catch((reject) => {
            console.log(reject)
          })
      }
    }
  }
</script>
