use movies_db;
db.dropDatabase();

db.movies.insertMany([
  {
    title: "White chicks",
    genre: "Commedy",
    rating: 10,
    releaseDate: "12/10/2000",
    runtime: 114,
    crew: {
      directorName: "afef ajiz",
      producer: "WarnerBros"
    },
    summary: "BLA BLA BLA BLA"

  },

  {
    title: "Red",
    genre: "Action",
    rating: 9,
    releaseDate: "12/10/2015",
    runtime: 128,
    crew: {
      directorName: "bruce ketta",
      producer: "Universal"
    },
    summary: "ETC ETC ETC ETC"
  }
]);
