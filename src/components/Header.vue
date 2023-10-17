<script>
export default {
    name: 'Header'
}
</script>


<template>
    <header>
        <img class="mx-5 my-3" :src="`../../public/logo-boolflix.png`" alt="">
    </header>
</template>


<style lang="scss" scoped>
header {
    height: 70px;

    img {
        height: 60%;
    }
}
</style>