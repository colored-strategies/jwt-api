const jwt = require("jsonwebtoken");

module.exports = {
    encode: (user) => {
        const {Username, Name, Surname, Gender, DateOfBirth: Birthday, createdDate: AccountDate} = user;
        const safeData = {Username, Name, Surname, Gender, Birthday, AccountDate};
        const token = jwt.sign({safeData}, process.env.JWT_SECRET, {algorithm: 'HS512', expiresIn: "10 min"});
        console.log(`Token generated: ${token.substring(0, 25)}...`);
        return token;
    },

    verify: (token) => {
        try {
            const result = jwt.verify(token, process.env.JWT_SECRET);
            if (result)
                return "Success";
            else
                return "There seem to be a problem with your token!"
        } catch (err) {
            return err.message;
        }
    },

    decode: (token) => {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);

        } catch (err) {
            return err.message;
        }
    }
};