var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();


router.get("/", function(req, res) {
    burger.selectAll("burgers", function(err, data) {
        if(err) throw err;
        res.render("index", {burgers: data});
    });
});

router.post("/api/burgers/:name", function(req, res) {
    burger.insertOne(req.params.name, function(err, data) {
        if(err) throw err;
        res.sendStatus(200);
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var col = req.body.col;
    var val = req.body.val;
    var id = req.params.id;
    burger.updateOne(col, val, id, function(err, data) {
            if(err) throw err;
            res.sendStatus(200);
    });
});


module.exports = router;