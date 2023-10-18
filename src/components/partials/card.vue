<script>

export default {
    name: 'Card',
    props: {
        item: Object,
    },
    data() {
        return {
            imgPath: "https://image.tmdb.org/t/p/",
            imgDimension: "w342",
            languageFlags: {
                en: '/en.png',
                it: '/it.png'
            }
        }
    },
    computed: {
        voteStars() {
            return Math.ceil(this.item.vote_average / 2);
        },

        initialWords() {
            return this.item.original_language.toUpperCase();
        }
    }
}
</script>


<template>

    <div class="row m-auto my-3 ">
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img v-if="item.poster_path" :src="`${imgPath}${imgDimension}` + item.poster_path" :alt="item.title || item.name">
                <img v-else :src="`/no-image-icon-23500.jpg`" :alt="item.title || item.name">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title || item.name }}</h5>
                    <p class="card-text">{{ item.original_title || item.original_name }}</p>
                    <img v-if="languageFlags.hasOwnProperty(item.original_language)"
                        :src="languageFlags[item.original_language]" alt="">
                    <p v-else>{{ `Lang: "${initialWords}"` }}</p>
                    <p v-for="(n, index) in 5" :key="index" class="fa-star mt-4" style="color: darkgoldenrod;" :class="(n <= voteStars) ? 'fa-solid' : 'fa-regular' "></p>
                </div>
            </div>
        </div>
    </div>

</template>


<style lang="scss" scoped>

.row{
    .col{
        .card{
            height: 100%;
            .card-body{
                
                img{
                    display: block;
                    height: 15px;
                }
            }
        }
    }
}

</style>