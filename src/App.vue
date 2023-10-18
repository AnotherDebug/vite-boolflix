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
  },
  mounted() {
    this.getApi('movie'||'tv'||'multi');
  }

}
</script>


<template>
  <div class="d-flex bg-black">

    <Header />

    <Search @startSearch="getApi" />

  </div>

  <h3 v-if="store.type == ''" class="text-center py-4 text-white m-0" style="background-color: #323032;">{{ message }}</h3>

  <Main v-if="store.moviesResults.length > 0" title="Film" type="movie" />
  <Main v-if="store.tvResults.length > 0" title="tv" type="tv" />

  
  
</template>


<style lang="scss">
@use './scss/Main.scss'
</style>