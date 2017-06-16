<template>
    <div>
        <header-component/>
        <div>this is template body</div>
        <other-component/>
    </div>
</template>
<style lang="scss">
    @import "test.scss";
    body{
        background-color:#ff0000;
        transform: translateX(1011px);
    }
</style>
<script>
    import './test.scss'
    export default {
        data() {
            return {
                msg:'hello vue'
            };
        },
        components: {
        }
    };
</script>
