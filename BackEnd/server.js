const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')  //needed for sharing data with other server
const bodyParser = require("body-parser")



app.use(cors()); //needed for sharing data with other server
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/movies',(req, res)=>{ //sends json data to api, listens for get method
    const mymovies = [
        {
            "Title":"Avengers: Infinity War",
            "Year":"2018",
            "imdbID":"tt4154756",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title":"Captain America: Civil War",
            "Year":"2016",
            "imdbID":"tt3498820",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            }
    ];
    res.status(200).json({
        message: "everything is okay",
        movies:mymovies}); // adds movies to array
});


app.post('/api/movies',(req, res)=>{  //listens for post method, takes body
    console.log('Movie Received! ');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);       // pulls title,year and body from body

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})