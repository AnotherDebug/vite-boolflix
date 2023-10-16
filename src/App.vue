<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Search from './components/Search.vue';
import axios from 'axios';
export default {
name: 'App',
components: {
  Header,
  Search,
  Main
}
}
</script>


<template>

  <Header />

  <Search />

  <Main />
  
</template>


<style lang="scss">

@use './scss/Main.scss'

</style>