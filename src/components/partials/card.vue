<script>
export default {
    name: 'Card',
    props: {
        original_name: String,
        name: String,
        original_language: String,
        vote_average: String,
        overview: String
    }
}
</script>


<template>
    <div class=" my-5 auto">

        <div class="wrapper d-flex flex-wrap">

            <!-- SINGOLA CARD -->
            <div class="card">
                <img src="../../../public/it.png" alt="">
                <div class="info">
                    <h1>Title</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>

        </div>

    </div>
</template>


<style lang="scss" scoped>
.wrapper {
    display: flex;
    width: 90%;
    margin: auto;

    .card {
        width: calc(100% / 6 - 20px);
        min-width: 150px;
        height: 250px;
        padding: 1.5rem;
        background: white;
        position: relative;
        display: flex;
        align-items: flex-end;
        transition: 0.4s ease-out;
        box-shadow: 0px 7px 10px rgba(black, 0.5);
        margin: 10px;

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

            h1 {
                margin: 0px
            }

            p {
                letter-spacing: 1px;
                font-size: 15px;
                margin-top: 8px;
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