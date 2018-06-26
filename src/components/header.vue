<template>
    <el-tabs v-model='pageIndex'  @tab-click="handleClick">
        <el-tab-pane label="欢迎" name="1"></el-tab-pane>
        <el-tab-pane label="用户" name="2"></el-tab-pane>
        <el-tab-pane label="主页" name="3"></el-tab-pane>
        <el-tab-pane label="说说" name="4"></el-tab-pane>
    </el-tabs>
</template>
<script>
    export default {
        data() {
            return {
                pageIndex : '1',
            };
        },
        methods: {
            handleClick(tab, event) {
                if (tab.name == 1){
                    this.$router.push('Lobby')
                }else{
                    this.$router.push('login')
                }
            }
        }
    };
</script>

<style>
    el-tab-pane{
        float: left;
    }
</style>
