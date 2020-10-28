const dataFormatter = (user) => {
    const {Username, Name, Surname, Gender, DateOfBirth: Birthday, createdDate: AccountDate} = user;
    return {Username, Name, Surname, Gender, Birthday, AccountDate};
};

module.exports = dataFormatter;
