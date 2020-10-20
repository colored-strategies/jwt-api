const JWTLibrary = require("jsonwebtoken");

module.exports = {
    encode: (user) => {
        return user.Name;
    }
};