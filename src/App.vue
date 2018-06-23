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
        components :{  // 定义组件
            HeaderDiv,
            FooterDiv
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
