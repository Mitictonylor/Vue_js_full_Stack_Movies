# Movies_db

Movies_db is a full stack JavaScript application with an Express server and MongoDB database.

## Getting Started

These instructions will get the project up and running on your local machine for development purposes.

### Installing

- Install dependencies in both the client and the server folders:
```
cd client
npm install
```
```
cd server
npm install
```
- Seed the database.  Within the server folder:
```
npm run seeds
```
- Run express (leave running in a terminal window).  Within the server folder:
```
npm run server:dev
```
- Run Vue development environment (leave running in a terminal window).  Within client folder:
```
npm run serve
```

# Using

The application is running on port 8080 so visit http://localhost:8080/.

# Brief
Learning Objectives
- Be able to create a RESTful JSON API
- Be able to connect express to MongoDB
- Be able to make requests to API using Vue

You have been asked to complete an app to be able to list favourite movies stored in a database.

This should be a RESTful API and should include the following routes:

- /api/movies - Index (GET)
- /api/movies/:id - Show (GET)
- /api/movies/:id - Destroy (DELETE)

Movies will be stored with the following data:

- Title
- Genre
- Rating (PG, 12A, 15, 18, etc)
- Release Date (Stored as a string for now)
- Runtime
- Crew (An object storing director and producer details)
- You will need to seed the database.

Running the app
- We have provided you with a basic front end coded in Vue.

- You can run the front end with the following commands.

Client:

- npm install
- npm run serve
- Front End will run on http://localhost:8080

MVP
Set up the express server and run it using the command npm run server:dev (in the server terminal tab).
You should then be able to visit this on http://localhost:3000

- Connect to MongoDB in your server file
- Create a router file and have your server use the router for ‘/api/movies/’.
- Code the routes to show all movies, a single move and delete a movie.

Extensions
- Create a MovieService in the client to deal with fetch requests to get all movies and delete a movie
- Call these requests in the appropriate components.
- Handle the delete to update the front end when a movie is deleted

Advanced Extensions
- Update the view so when a movie is clicked it shows more details about the move like - Director, producer, a summary of the plot(you will need to change your seed data to add this in. Doesn’t need to be a massive paragraph just enough to display)

No need to use vue router to link to this just use conditional rendering (Think back to the Rick and Morty/Star wars/Munro/Countries apps)

You will need to:

- Create the component to show these details.
- Use conditional rendering and event bus to display the selected movie .

Hints

You will need to create a server folder at root, npm init and npm install the following in your server:

- express
- nodemon
- mongodb
- cors

You will need to set up scripts in the server package.json for

- server:dev
- seed
