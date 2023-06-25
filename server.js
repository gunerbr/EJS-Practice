const express = require("express");
const app = express();
const userRouter = require("./routes/users");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// app.get("/", logger,(request, response) => {
//   console.log("here");
//   response.render("index", { text: "World" });
// });

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
