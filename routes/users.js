const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const router = express.Router();
const app = express();

// define the value of users array before the endpoints
const users = [{ name: "Bryan" }, { name: "Ellie" }];

// include bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

router.get("/", (req, res) => {
  res.send("User list");
});

router.get("/new", (req, res) => {
  res.render("users/new", { firstName: "Bryan" });
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ name: `${req.body.firstName}` });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("error");
    res.render("users/new", { name: req.body.firstName });
  }
  console.log("req.body.firstName:", req.body.firstName);
  res.send("hi");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get user with ID: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with ID: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with ID: ${req.params.id}`);
  });

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
