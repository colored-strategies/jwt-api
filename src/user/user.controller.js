const Model = require("./user.model");
const Token = require("../helper/tokenGenerator");

module.exports = {

    authenticate: async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user = await Model.findOne({Username: username});

        if (!user) res.send({result: "User not found!", token: null});
        else if (password !== user.Password)
            res.send({result: "Password doesn't match with the account, try again!", token: null});

        else {
            const token = await Token.encode(user);
            console.log(`Authenticated... ${username}`);
            res.send({result: "Success", token});
        }
    },

    verifyToken: async (req, res) => {
        const result = await Token.verify(req.body.token);
        res.send({result, token: req.body.token});
    },

    decodeToken: async (req, res) => {
        const result = await Token.decode(req.body.token);
        if (result.safeData)
            res.send({result: "Success", user: result.safeData});
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