const express = require('express')
const router = express.Router();

router.get("/", (req, res) => {
    res.send("User list");
  });


router.get("/new", (req, res) => {
    res.send("New user form");
  });


  router.post('/',(req,res)=>{
    res.send('Create User')
  })



  router.get('/:id',(req,res)=>{
res.send(`Get user with ID: ${req.params.id}`)
  })
  module.exports = router;