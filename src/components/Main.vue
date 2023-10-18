<script>
import Card from './partials/card.vue';
import { store } from '../data/store';
export default {
    name: 'Main',
    components: {
        Card
    },
    data() {
        return {
            store
        }
    }

}
</script>


<template>
    <main>

        <Card v-for="item in store[type]"
        :key="item.id"
        :item="item" />

    </main>
</template>


<style lang="scss" scoped>

@use '../scss/partials/variables' as *;

main {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    background-color: $primary-color;
    overflow: hidden;
    h1 {
        color: white;
        margin: 50px;
    }
}

</style>