const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (request, response) => {
  console.log("here");
  // response.sendStatus(500)
  // response.send('Hi')
  // response.download('server.js')
  // response.json({ message: "Error" });
  response.render("index", { text: "World" });
});

app.get("users", (req, res) => {
  res.send("User list");
});
app.get("users/new", (req, res) => {
  res.send("New user form");
});

app.listen(3000);
