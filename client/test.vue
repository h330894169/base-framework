<template>
    <div>
        <div>this is template body
<br>

            {{msg}}</div><a>link</a>
    </div>
</template>
<style lang="scss">
    body{
        color: red;
        transform: translateX(12px);
    }
</style>
<script>
    export default {
        data() {
            return {
                msg:'hello 222vue'
            };
        },
        components: {
        }
    };
</script>
