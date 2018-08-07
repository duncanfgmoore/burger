var express = require("express");
var bodyParser = require("body-parser");
var orm = require("./config/orm.js");

orm.insertOne("burgers", 'burger_name', "beefburger");