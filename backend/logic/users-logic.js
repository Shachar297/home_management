const usersDao = require("../dao/users-dao");


async function login(apartmentMember) {
    return await usersDao.login(apartmentMember)
}


module.exports = {
    login
}