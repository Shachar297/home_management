const connectionWrapper = require("./connection-wrapper");


async function registerNewApartment(apartment) {

    const userInfo = await registerApartmentUser(apartment.username, apartment.password)
    let
        sql = `
                INSERT INTO
                apartments
                (street, apartment_number, apartment_name, user_id)
                VALUES (?, ?, ?)`,
        parameters = [apartment.street, apartment.apartmentNumber, apartment.apartmentName, userInfo.insterId];

    try {
        const dbResponse = await connectionWrapper.executeWithParameters(sql, parameters);
        return dbResponse
    } catch (error) {
        throw new Error(error);
    }
}

async function registerApartmentUser(username, password) {
    let
        sql = `
            INSERT INTO
            users
            (username, password)
            VALUES (?, ?)`,
        parameters = [username, password];

    try {
        const dbResponse = await connectionWrapper.executeWithParameters(sql, parameters);
        return dbResponse
    } catch (error) {
        throw new Error(error);
    }
}

async function login(apartment) {
    let
        sql = `
            SELECT * FROM
            apartments
            where apartment_name = ?
            AND
            username = ?
            AND
            password = ?
            `,
        parameters = [apartment.apartmentNumber, apartment.username];

    try {
        const dbResponse = await connectionWrapper.executeWithParameters(sql, parameters);
        return dbResponse
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    registerNewApartment,
    login
}