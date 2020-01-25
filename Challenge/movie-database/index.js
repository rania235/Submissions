const express = require("express");
const app = express();
const port = 3000;
const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 }
];

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/test", (req, res) => {
  res.send({
    status: 200,
    message: "ok"
  });
});

app.get("/time", (req, res) => {
  let today = new Date();
  res.send({
    status: 200,
    message: today.getHours() + ":" + today.getMinutes()
  });
});

app.get("/:id", (req, res) => {
  let id = req.params.id;
  res.send({
    status: 200,
    message: "Hello " + id
  });
});

app.get("/search", (req, res) => {
  const search = req.query.s;

  if (typeof search != "undefined") {
    const response = {
      status: 200,
      message: "ok",
      data: search
    };

    res.send(response);
  } else {
    const response = {
      status: 500,
      error: true,
      message: "you have to provide a search"
    };

    res.status(500);
    res.send(response);
  }
});

app.get("/movies/search", (req, res) => {
  const search = req.query.s;
  res.send({
    status: 200,
    message: "ok"
  });
});
app.get("/movies/read", (req, res) => {
  const search = req.query.s;
  res.send({
    status: 200,
    message: movies
  });
});

app.get("/movies/update", (req, res) => {
  const search = req.query.s;
  res.send({
    status: 200,
    data: movies
  });
});

app.get("/movies/delete", (req, res) => {
  const search = req.query.s;
  res.send({
    status: 200,
    message: "ok"
  });
});

app.get("/movies/read/:sortby", (req, res) => {
  const sortBy = req.params.sortby;
  let arrayToReturn = [];
  switch (sortBy) {
    case "by-date":
      arrayToReturn = movies.sort((a, b) => {
        return a.year - b.year;
      });
      break;
    case "by-rating":
      arrayToReturn = movies.sort((a, b) => {
        return b.rating - a.rating;
      });
      break;
    case "by-title":
      arrayToReturn = movies.sort((a, b) => {
        return a.title > b.title;
      });
      break;
    default:
      res.json({
        status: 500,
        error: true,
        message: "you have to provide a valid search"
      });
      break;
  }
  res.json({ status: 200, data: arrayToReturn });
});
app.get("/movies/get/id/:id", (req, res) => {
  if (req.params.id) {
    if (req.params.id < movies.length && req.params.id >= 0) {
      res.json({ status: 200, data: movies[req.params.id] });
    } else {
      res.json({
        status: 404,
        error: true,
        message: `the movie with id ${req.params.id} does not exist`
      });
    }
  }
});
app.get("/movies/add"),
  (req, res) => {
    const title = req.query.title,
      year = req.query.year,
      rating = req.query.rating;
    if (year && title) {
      if (year.length == 4 && !isNaN(year)) {
        if (rating) {
          movies.push({
            title: title,
            year: year,
            rating: rating
          });
          res.json({
            status: 200,
            data: movies
          });
        } else {
          movies.push({
            title: title,
            year: year,
            rating: 4
          });
          res.json({
            status: 200,
            data: movies
          });
        }
      } else {
        res.json({
          status403,
          error: true,
          message: "you cannot create a movie with wrong year!"
        });
      }
    } else {
      res.json({
        status: 403,
        error: true,
        message:
          "you cannot create a movie without providing a title and a year"
      });
    }
  };

app.get("/movies/get/id/:id", (req, res) => {
  if (req.params.id) {
    if (req.params.id < movies.length && req.params.id >= 0) {
      res.json({ status: 200, data: movies[req.params.id] });
    } else {
      res.json({
        status: 404,
        error: true,
        message: `the movie with id ${req.params.id} does not exist`
      });
    }
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
