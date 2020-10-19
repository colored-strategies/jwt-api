const Model = require("./user.model");

module.exports = {
    authenticate: async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        if (username === password) res.send("Authenticated...");
        else res.send("Try again!");

        console.log(req.body)

    }
};