<template>
  <div class="hello">
      <h1>Welcome to Your Vue.js App</h1>
      <h2>Essential Links</h2>
      <div>
          <button type="submit" class="btn" @click="login">查询数据库</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    methods : {
        login() {
            this.$http.post('/api/test', {common : 'user'}).then((response) => {
                console.log(response.body)
            }).catch((reject) => {
                console.log('methods ------2------ ',reject)
            })
        }
    }
}
</script>