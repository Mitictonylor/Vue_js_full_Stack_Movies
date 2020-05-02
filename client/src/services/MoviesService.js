const url = 'http://localhost:3000/api/movies/'
export default{
  getMovies(){
    return fetch(url).then(res => res.json())
  },
  deleteMovie(id){
    return fetch(url + id, { method: "DELETE"})
    .then(res => res.json())
  }
}
