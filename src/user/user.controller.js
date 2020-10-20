const Model = require("./user.model");
const Token=require("../helper/tokenGenerator");

module.exports = {
    authenticate: async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user= await Model.findOne({Username:username});
        if (password===user.Password) {
            let token= await Token.encode(user);
                res.send(`Authenticated... ${token}`);
        }
        else res.send("Try again!");
    },

    createUser: async (req, res) => {
        let newModel = new Model({
            Name: req.body.Name,
            Surname: req.body.Surname,
            Gender: req.body.Gender,
            DateOfBirth: req.body.DateOfBirth,
            Username: req.body.Username,
            Password: req.body.Password,
        });
        let user = await newModel.save();
        res.send({message: "Model created successfully!", data: user});
    },

    deleteUsers: async (req, res) => {
        await Model.collection.drop();
        res.send("Model deleted successfully!");
    },
};