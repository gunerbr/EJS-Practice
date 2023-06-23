# Express & EJS

**EJS** is a view engine.

- by default your renderable html is stored in a folder in the root directory named `views`

in order to set up ejs we need to run
`npm i ejs`


and then in our server.js:


```js
app.set('view engine', 'ejs')

```