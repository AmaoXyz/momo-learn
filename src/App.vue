<template>
  <div id="app">
      <HeaderDiv></HeaderDiv>
      <router-view></router-view>
      <FooterDiv></FooterDiv>
  </div>
</template>

<script>
    // 引入组件
    import HeaderDiv from './components/header'
    import FooterDiv from './components/footer'

    export default {
        name: 'App',
        data(){
            return {
                Loading : null
            }
        },
        components :{  // 定义组件
            HeaderDiv,
            FooterDiv
        },
        mounted(){
            this.$root.eventHub.$on('showLoading', (params)=>{
                this.Loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
            })

            this.$root.eventHub.$on('hideLoading', (params)=>{
                if (this.Loading){
                    this.Loading.close()
                    this.Loading = null
                }
            })
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*width: 1920px;*/
        margin: 0 auto;
        /*min-width: 1920px;*/
    }

</style>
