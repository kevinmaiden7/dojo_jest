const express = require("express");
const app = express();
const calculator = require("./calculator");

app.get("/", (req, res) => {
    res.send("The app is working");
});

app.get("/add", (req, res) =>{
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    res.json({
        result: calculator.add(a, b)
    });
});


app.get("/sub", (req, res) =>{
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    res.json({
        result: calculator.subtract(a, b)
    });
});

app.get("/mult", (req, res) =>{
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    res.json({
        result: calculator.mult(a, b)
    });
});

app.get("/div", (req, res) =>{
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    res.json({
        result: calculator.div(a, b)
    });
});

module.exports = app;
