const express = require("express");
const app = express();
const md5 = require("md5");

app.use(express.json());

const genres = [{ userName: "Action", passWord: "admin123" }];

app.get("/api/login", (req, res) => {
  res.send(genres);
});

app.post("/api/login", (req, res) => {
  //   if (error) return res.status(400).send(error.details[0].message);

  const genre = {
    userName: req.body.userName,
    passWord: md5(req.body.passWord),
  };
  genres.push(genre);
  res.send(genre);
});

const port = process.env.PORT || 3500;
app.listen(port, () => console.log(`Listening on port ${port}...`));
