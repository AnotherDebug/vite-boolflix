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
        <Card v-for="card in store.tvResults" 
        :key="card.id"
        :original_name="card.original_name"
        :name = "card.name"
        :original_language = "card.original_language"
        :vote_average = "card.vote_average"
        :overview = "card.overview" />

    </main>
</template>


<style lang="scss" scoped></style>