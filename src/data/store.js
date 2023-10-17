import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3',
    api_key: 'ba457ad4ccaf31ff50761d2a8011071a',
    movieSearch: '/search/movie',
    tvSearch: '/search/tv',
    query: '',
    language: 'it-IT',
    tvResults: [],
    moviesResults: []
});