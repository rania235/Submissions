const express = require("express");
const app = express();
const port = 3000;

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
