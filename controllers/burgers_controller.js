var express = require("express");

var db = require("../models");

var router = express.Router(); 


router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
        res.render("index", {burgers: dbBurger});
    });
});

router.post("/api/burgers/:name", function(req, res) {
    db.Burger.create({
        name: "req.params.name",
        devoured: 0
    }).then(function(dbBurger) {
        console.log("burger: ",dbBurger);
        res.json(dbBurger);
    });
});




    
    // router.post("/api/burgers/:name", function(req, res) {
//     burger.insertOne(req.params.name, function(err, data) {
//         if(err) throw err;
//         res.sendStatus(200);
//     });
// });

// router.put("/api/burgers/:id", function(req, res) {
//     var col = req.body.col;
//     var val = req.body.val;
//     var id = req.params.id;
//     burger.updateOne(col, val, id, function(err, data) {
//             if(err) throw err;
//             res.sendStatus(200);
//     });
// });


module.exports = router;