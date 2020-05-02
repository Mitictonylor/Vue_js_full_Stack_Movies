<template lang="html">
  <div class="film-wrapper">
    <film-grid-item v-for="(film, index) in films" :key="index" :film="film" />
  </div>
</template>

<script>
import MoviesService from '@/services/MoviesService.js'
import FilmGridItem from './FilmGridItem'
import {eventBus} from '@/main.js';
export default {
  data(){
    return {
      films: []
    };
  },
  methods:{
    getMovies: function(){
      MoviesService.getMovies().then(data => this.films = data)
    }
  },
  mounted(){
this.getMovies()

eventBus.$on('film-deleted', (id) => {
  const index = this.films.findIndex(film => film._id === id)
  this.films.splice(index,1)
})
  },
  components: {
    'film-grid-item': FilmGridItem
  },
  watch:{
    films: function(){
      this.getMovies()
    }
  }
}
</script>

<style lang="css" scoped>

.film-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
