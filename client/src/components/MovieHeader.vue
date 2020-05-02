<template lang="html">
  <div class="header">
    <h1>Movies List</h1>
  </div>
</template>

<script>
export default {
  name: 'movie-header'
}
</script>

<style lang="css" scoped>
.header {
  max-height: 100px;
  width: 100vw;
  padding: 30px;
  text-align: center;
  background: #1F7A8C;
  color: white;
  font-size: 30px;
  background-image: url('../assets/popcorn.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  border-bottom: solid black 1px
}
</style>
