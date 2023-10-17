<script>
import { store } from '../data/store';
export default {
    name: 'Search',
    data() {
        return{
            store
        }
    }
}
</script>


<template>
    <div class="container d-flex align-items-center justify-content-end">
        <input v-model="store.params.query"  type="search" name="search" id="search" placeholder="Search...">

        <select class="form-select mx-4"  aria-label="Default select example">
            <option value="1">movie</option>
            <option value="2">tv</option>
        </select>

        <button @click="$emit('startSearch')" class="btn btn-danger">Search</button>
    </div>
</template>


<style lang="scss" scoped>

select {
    width: 100px;
    min-width: 20px;
}

</style>