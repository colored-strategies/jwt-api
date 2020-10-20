module.exports = function (app) {
    const urlPrefix = "/user";
    const UserController = require("./user.controller");

    app.post(`${urlPrefix}/authenticate`, UserController.authenticate);
    app.post(`${urlPrefix}/verify`, UserController.verifyToken);
    app.post(`${urlPrefix}/getUser`, UserController.decodeToken);
    app.post(`${urlPrefix}/signUp`, UserController.createUser);
    app.delete(`${urlPrefix}/delete`, UserController.deleteUsers);
};