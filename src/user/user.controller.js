const Model = require("./user.model");
const Token = require("../helper/tokenActions");
const dataFormatter = require("./user.modelView");

module.exports = {

    authenticate: async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user = await Model.findOne({Username: username});

        if (!user) res.send({result: "User not found!", token: null, user: null});
        else if (password !== user.Password)
            res.send({result: "Password doesn't match with the account, try again!", token: null, user: null});

        else {
            let responseData = user;

            if (!req.body.fullDetail || req.body.fullDetail!=="true")
                responseData = dataFormatter(user);

            const token = await Token.encode(responseData);
            res.send({result: "Success", token, user: responseData});
        }
    },


    decodeToken: async (req, res) => {
        const result = await Token.decode(req.body.token);
        if (result.user)
            res.send({result: "Success", user: result.user});
        else
            res.send({result, user: null});
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
    }
};