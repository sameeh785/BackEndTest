const db = require("../models");
const Task = db.task;
exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.createTask = (req, res) => {
    Task.create({
        name: req.body.name  
    })
        .then(task => {
            res.json({task});
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.listTask = (req, res) => {
    Task.findAll()
        .then(tasks=> {
            res.json({ tasks});
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
    
};


