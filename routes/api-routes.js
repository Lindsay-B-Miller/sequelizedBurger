var db = require("../models");

module.exports = function (app) {
    app.get("/api/burgers", function (req, res) {
        db.Burger.findAll({}).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });

    app.post("/api/burgers", function (req, res) {
        db.Burger.create(req.body).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });

    app.put("/api/burgers", function (req, res) {
        db.Burger.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }
        ).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });
};