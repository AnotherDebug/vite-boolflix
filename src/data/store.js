import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/',
    params:{
        api_key: 'ba457ad4ccaf31ff50761d2a8011071a',
        query: '',
        language: 'it-IT',
    },
    type: '',
    movie: [],
    tv: []
});