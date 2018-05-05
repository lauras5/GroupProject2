// require model
var db = require('../models');

module.exports = function(app) {
    // gets students and creates json 
    app.get("/api/studentList", function(req, res) {
        db.Users.findAll({}).then(function(Users) {
            res.json(Users)
        });
    });

    // gets messages
    app.get("/api/messages", function (req, res) {
        db.Messages.findAll({}).then(function(Messages) {
            res.json(Messages)
        });
    });

    // gets authentication
    app.post("/admin/token", function (req, res) {
        db.authKeys.create(req.body).then(function(res){
            console.log(res)
        })
    })

};

// how to build tables for chat forum
