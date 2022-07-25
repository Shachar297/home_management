const apartmentDao = require('../dao/apartments-dao');


async function registerNewApartment(apartment) {
    return await apartmentDao.registerNewApartment(apartment);
}


module.exports = {
    registerNewApartment,
}