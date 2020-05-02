<template>
  <section>
    <movie-header />
    <films-grid />
  </section>
</template>

<script>
import FilmsGrid from '@/components/FilmsGrid';
import MovieHeader from '@/components/MovieHeader';

export default {
  name: 'app',
  components: {
    'films-grid': FilmsGrid,
    'movie-header': MovieHeader
  }
}
</script>

<style>

body {
  font-family: 'Source Serif Pro', serif;
  
  background-color: #E1E5F2;
  background-position: center;
  width: 100%;
  margin: 0 auto;
  color: #1F7A8C;
}

h1, h2, h3 {
  color: #022B3A;
  font-family: 'Skranji', cursive;
}
</style>
