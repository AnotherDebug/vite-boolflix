<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Search from './components/Search.vue';
import axios from 'axios';
import { store } from './data/store';
export default {
  name: 'App',
  components: {
    Header,
    Search,
    Main
  },
  data() {
    return {
      store,
      message: "Fai una ricerca"
    }
  },
  methods: {
    getApi(type) {
      axios.get(store.apiUrl + store.type, {
        params: store.params
      })
        .then(res => {

          store[type] = res.data.results;
        
            console.log(store[type]);
        })
        .catch(e => {
          console.log(e);
        })
    }
  }

}
</script>


<template>
  <div class="d-flex bg-black">

    <Header />

    <Search @startSearch="getApi(store.type)" />

  </div>

  <h3 v-if="store.type == ''" class="text-center py-4 text-white m-0" style="background-color: #323032; height: calc(100vh - 70px);">{{ message }}</h3>

  <Main v-if="store.type == 'movie' && store.movie.length > 0" title="Films" :type="store.type" />
  <Main v-if="store.type == 'tv' && store.tv.length > 0" title="Serie Tv" :type="store.type" />
</template>



<style lang="scss">
@use './scss/Main.scss'
</style>