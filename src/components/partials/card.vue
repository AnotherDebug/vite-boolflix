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
    <div class="card-container m-auto my-3">
        <div class="card">
            <div class="img-content">
                <img v-if="item.poster_path" :src="`${imgPath}${imgDimension}` + item.poster_path"
                    :alt="item.title || item.name">
                <img v-else :src="`/no-image-icon-23500.jpg`" :alt="item.title || item.name">
            </div>
            <div class="content">
                <h5 class="card-title">{{ item.title || item.name }}</h5>
                <p>{{ item.original_title || item.original_name }}</p>
                <img v-if="languageFlags.hasOwnProperty(item.original_language)"
                    :src="languageFlags[item.original_language]" alt="">
                <p v-else>{{ `Lang: "${initialWords}"` }}</p>
                <p v-for="(n, index) in 5" :key="index" class="fa-star mt-4" style="color: darkgoldenrod;"
                    :class="(n <= voteStars) ? 'fa-solid' : 'fa-regular'"></p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.card-container {
    width: 233px;
    height: 350px;
    position: relative;
    border-radius: 10px;

    &::before {
        content: "";
        z-index: -1;
        position: absolute;
        inset: 0;
        transform: translate3d(0, 0, 0) scale(0.95);
        filter: blur(20px);
    }

    .card {
        width: 100%;
        height: 100%;
        overflow: hidden;

        .img-content {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: scale 0.6s, rotate 0.6s, filter 1s;

            img {
                height: 100%;
                object-fit: cover;
            }

        }

        .content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            color: #e8e8e8;
            padding: 20px;
            line-height: 1.5;
            opacity: 0;
            pointer-events: none;
            transform: translateY(50px);
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
            background-color: #3330328a;

            img {
                height: 10px;
                display: block;
            }

            p {}

        }

        &:hover .content {
            opacity: 1;
            transform: translateY(0);
        }

        &:hover .img-content {
            scale: 2.5;
            rotate: 30deg;
            filter: blur(7px);
        }

    }
}

</style>