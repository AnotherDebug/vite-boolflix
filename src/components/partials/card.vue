<script>

export default {
    name: 'Card',
    props: {
        item: Object,
        // title: String
    },
    data() {
        return {
            imgPath: "https://image.tmdb.org/t/p/",
            imgDimension: "w342",
            languageFlags: {
                en: '../../../public/en.png',
                it: '../../../public/it.png'
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
    <!-- <h1>{{ title }}</h1> -->

    <div class="row m-auto my-3 ">
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img :src="`${imgPath}${imgDimension}` + item.poster_path" :alt="item.title || item.name">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title || item.name }}</h5>
                    <p class="card-text">{{ item.original_title || item.original_name }}</p>
                    <img v-if="languageFlags.hasOwnProperty(item.original_language)"
                        :src="languageFlags[item.original_language]" alt="">
                    <p v-else>{{ `Lang: "${initialWords}"` }}</p>
                    <p v-for="(n, index) in 5" :key="index" class="fa-star mt-4" :class="(n <= voteStars) ? 'fa-solid' : 'fa-regular' "></p>
                </div>
            </div>
        </div>
    </div>



    <div class=" my-5 auto">

        <div class="wrapper">

            <!-- SINGOLA CARD -->
            <!-- <div class="card">
                <img :src="`${imgPath}${imgDimension}`+ item.poster_path" :alt="item.title || item.name">
                <div class="info">
                    <img v-if="languageFlags.hasOwnProperty(item.original_language)" :src="languageFlags[item.original_language]" alt="">
                    <p v-else>{{ `Lang: "${initialWords}"` }}</p>
                    <p>{{ item.title || item.name }}</p>
                    <p>{{ item.original_title || item.original_name }}</p>
                    <p v-for="(n, index) in 5" :key="index" class="fa-star" :class="(n <= voteStars) ? 'fa-solid' : 'fa-regular' "></p>
                </div>
            </div> -->

        </div>

    </div>
</template>


<style lang="scss" scoped>

.row{
    .col{
        .card{
            .card-body{
                
                img{
                    display: block;
                    height: 15px;
                }
            }
        }
    }
}
// .wrapper {
//     display: flex;
//     flex-wrap: wrap;
//     width: 90%;
//     margin: auto;

//     .card {
//         width: 200px;
//         height: 300px;
//         padding: 0 20px;
//         background: white;
//         position: relative;
//         display: flex;
//         align-items: flex-end;
//         transition: 0.4s ease-out;
//         box-shadow: 0px 7px 10px rgba(black, 0.5);
//         margin: 10px;
//         margin-top: 100px;

//         &:hover {

//             &:before {
//                 opacity: 1;
//             }

//             .info {
//                 opacity: 1;
//                 ;
//             }
//         }

//         .info {
//             position: relative;
//             z-index: 3;
//             color: white;
//             opacity: 0;
//             transform: translateY(30px);
//             transition: 0.5s;

//             p {
//                 letter-spacing: 1px;
//                 font-size: 15px;
//                 margin-top: 20px;
//             }
//             img {
//                 height: 10px;
//                 width: 20px;
//             }
//         }

//         img {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//             position: absolute;
//             top: 0;
//             left: 0;
//         }

//         &:before {
//             content: "";
//             position: absolute;
//             top: 0;
//             left: 0;
//             display: block;
//             width: 100%;
//             height: 100%;
//             border-radius: 15px;
//             background: rgba(black, 0.6);
//             z-index: 2;
//             transition: 0.5s;
//             opacity: 0;
//         }

//     }
//}
</style>