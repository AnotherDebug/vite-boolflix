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
    }
  },
  methods: {
    getApiTv() {
      const apiTv = store.apiUrl + store.tvSearch;
      axios.get(apiTv, {
        params: {
          api_key: store.api_key,
          query: store.query,
          language: store.language
        }
      })
        .then(res => {
          store.tvResults = res.data.results;
          console.log(store.tvResults);
        })
        .catch(e => {
          console.log(e);
        })
    }
  },
  mounted() {
    this.getApiTv();
  }

}
</script>


<template>
  <div class="d-flex bg-black">

    <Header />

    <Search />

  </div>


  <Main />
</template>


<style lang="scss">
@use './scss/Main.scss'
</style>