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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
