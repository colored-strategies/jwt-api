module.exports = function(app){
    const urlPrefix="/user";
    const UserController=require("./user.controller");

    app.get(`${urlPrefix}/authenticate`,UserController.authenticate);
};