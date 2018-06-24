<template>
    <footer class="footers">
        <p>
            Copyright&nbsp;&copy;&nbsp;{{author}} - 2016 All rights reserved
        </p>
    </footer>
</template>

<script>
    export default {
        name: 'footers',
        data () {
            return {

            }
        },
        computed: {
            author () {
                return this.$store.state.author
            }
        }
    }
</script>

<style>
    .footers{
        background: darkgrey;
    }
</style>