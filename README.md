# Express & EJS

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
