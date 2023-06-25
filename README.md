# Express & EJS

[Repo](https://github.com/gunerbr/EJS-Practice)

**EJS** is a view engine.

- by default your renderable html is stored in a folder in the root directory named `views`

in order to set up ejs we need to run
`npm i ejs`

and then in our server.js:

```js
app.set("view engine", "ejs");
```

to output dynamic content in ejs:

```ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Hello <%= 2+2 %>
</body>
</html>

```

**To ouput dynamic content from the server:**

> server.js

```js
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

app.listen(3000);
```

> index.ejs

```ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Hello <%= text %>
</body>
</html>


```

---

- In our routes/users.js file:

`const router = express.Router();`

- router is like a mini version of our app... router has methods like .get just like our app does in the server.js file.

**Router.route** allows us to chain togther different http methods for the same path... _i.e.)_

```js
router.get("/:id", (req, res) => {
  res.send(`Get user with ID: ${req.params.id}`);
});
router.put("/:id", (req, res) => {
  res.send(`Update user with ID: ${req.params.id}`);
});
router.delete("/:id", (req, res) => {
  res.send(`Delete user with ID: ${req.params.id}`);
});
```

> could be written as:

```js
router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get user with ID: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with ID: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with ID: ${req.params.id}`);
  });
```

**router.param('id')** _runs whenever a route that has an id parameter_


```js
const users = [{ name: "Bryan" }, { name: "Ellie" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

```

> this router.param() is essentially a middleware that saves us from having to write a lot of repetative code in each http verb method for a given route.


**Middleware**  _is code that runs between the start and end of the request_
> every middleware takes a `request` , `response`, `next` parameters.

- we generally don't use a next when we are doing .get or .post.
- you generally only see next when you are creating middleware.
