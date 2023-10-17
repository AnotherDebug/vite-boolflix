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
        
            console.log(store.moviesResults);
            console.log(store.tvResults);
         
        })
        .catch(e => {
          console.log(e);
        })
    }
  },
  mounted() {
    this.getApi;
  }

}
</script>


<template>
  <div class="d-flex bg-black">

    <Header />

    <Search @startSearch="getApi" />

  </div>


  <Main title="Film" />
  <Main title="Tv" />

  
  
</template>


<style lang="scss">
@use './scss/Main.scss'
</style>