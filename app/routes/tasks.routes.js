const { authJwt } = require("../middleware");
const controller = require("../controllers/task.controller");



module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post(
        "/create-task",
        [
            authJwt.verifyToken 
        ],
        controller.createTask
    );
    app.get(
        "/list-tasks",
        [
            authJwt.verifyToken
        ],
        controller.listTask
    );

  
};
