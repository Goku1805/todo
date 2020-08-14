var http = require('http');

const express = require("express");
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const userRoute = require("./api/user");
const collectionRoute = require("./api/collection");
const todoListRoute = require("./api/todoList");
const todo = require("./api/todo");
var db = require('./models/models');
app.use("/user",userRoute);
app.use("/collection",collectionRoute);
app.use("/todoList",todoListRoute);
app.use("/todo",todo);


const server = http.createServer(app);
server.listen(3000, function() {
});

