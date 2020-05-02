<template lang="html">
  <div>
  <p>Director Name:{{film.crew.directorName}}  </p>
  <p>Producer:{{film.crew.producer}}  </p>
  <p>Summary:{{film.summary}}  </p>
  </div>
</template>

<script>
export default {
  name:"FilmDetails",
  props:["film"]
}
</script>

<style lang="css" scoped>
.film-card {
  background-color: #BFDBF7;
  border: 1px solid #BFDBF7;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: 25vw;
}


.film-key {
  font-weight: bold;
  color: #3E363F
}
</style>
