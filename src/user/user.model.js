module.exports = {
    authCheck: (user) => {
        if (user.username === user.password) return "Success";
        else return "Failed";
    }
};