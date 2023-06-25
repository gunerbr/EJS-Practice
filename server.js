const express = require("express");
const app = express();

// app.set("view engine", "ejs");
app.use(express.static("public"));

// app.get("/", logger,(request, response) => {
//   console.log("here");
//   response.render("index", { text: "World" });
// });

const userRouter = require("./routes/users");

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
