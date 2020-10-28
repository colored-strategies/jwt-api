const jwt = require("jsonwebtoken");

module.exports = {
    encode: (user) => {
        const token = jwt.sign({user}, process.env.JWT_SECRET, {algorithm: 'HS512', expiresIn: "10 min"});
        return token;
    },
    decode: (token) => {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            return err.message;
        }
    }
};