var express = require("express");
var burger = require("../models/burgers.js");

var router = express.Router();



//Create a controller that will GET all the burgers that are in the database
router.get("/", function (req, res) {
  burger.selectAll(function(data) {
    res.render("index", {burgers: data});
  });
});

//Create a controller that will POST new burgers to the database
router.post("/burgers", function (req, res) {
  burger.insertOne([req.body.burger_name], function(result){
    res.redirect("/");
  });
});

//Create a controller that will update devoured to true in the database
router.put("/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.updateOne({devoured: true}, condition, function(result){
    
    res.redirect("/");
  });
});


module.exports = router;