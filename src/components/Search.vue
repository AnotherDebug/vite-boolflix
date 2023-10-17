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
        <input v-model="store.query"  type="search" name="search" id="search" placeholder="Search...">

        <select class="form-select mx-4" style="width: 15%;" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>

        <button @click="$emit('startSearch')" class="btn btn-danger">Search</button>
    </div>
</template>


<style lang="scss" scoped></style>