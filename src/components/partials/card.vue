<script>
export default {
name: 'Card',
props: {
    original_name: String,
    name:String,
    original_language:String,
    vote_average:String,
    overview: String
}
}
</script>


<template>

    <div>
        <ul>
            <li>{{ original_name }}</li>
            <li>{{ name }}</li>
            <li>{{ original_language }}</li>
            <li>{{ vote_average }}</li>
            <li>{{ overview }}</li>
            <li>==========================</li>
        </ul>
    </div>
  
</template>


<style>

</style>