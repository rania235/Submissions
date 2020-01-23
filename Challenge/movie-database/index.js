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
app.get("/movies/read/:var", (req, res) => {
  const params = req.params.var;
  if (params == "by-date") {
    movies.sort(function(a, b) {
      return a.year - b.year;
    });
  } else if (params == "by-rating") {
    movies.sort(function(a, b) {
      return a.rating - b.rating;
    });
  } else if (params == "by-title") {
    movies.sort(function(a, b) {
      return a.title - b.title;
    });
  }
  res.send({
    status: 200,
    data: movies
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
