<script>

export default {
    name: 'Card',
    props: {
        item: Object
    },
    data() {
        return{
            imgPath: "https://image.tmdb.org/t/p/",
            imgDimension : "w342",
        }
    }
}
</script>


<template>
    <div class=" my-5 auto">

        <div class="wrapper">

            <!-- SINGOLA CARD -->
            <div class="card">
                <img :src="`${imgPath}${imgDimension}`+ item.poster_path" alt="">
                <div class="info">
                    <p>{{ item.title || item.name }}</p>
                    <p>{{ item.original_title || item.original_name }}</p>
                    <p>{{ item.original_language }}</p>
                    <p>{{ item.vote_average }}</p>
                </div>
            </div>

        </div>

    </div>
</template>


<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: auto;

    .card {
        width: 200px;
        height: 300px;
        padding: 0 20px;
        background: white;
        position: relative;
        display: flex;
        align-items: flex-end;
        transition: 0.4s ease-out;
        box-shadow: 0px 7px 10px rgba(black, 0.5);
        margin: 10px;
        margin-top: 100px;

        &:hover {

            &:before {
                opacity: 1;
            }

            .info {
                opacity: 1;
                ;
            }
        }

        .info {
            position: relative;
            z-index: 3;
            color: white;
            opacity: 0;
            transform: translateY(30px);
            transition: 0.5s;

            p {
                letter-spacing: 1px;
                font-size: 15px;
            }
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
        }

        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 15px;
            background: rgba(black, 0.6);
            z-index: 2;
            transition: 0.5s;
            opacity: 0;
        }

    }
}
</style>