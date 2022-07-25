const connectionWrapper = require("./connection-wrapper");


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
    login
}