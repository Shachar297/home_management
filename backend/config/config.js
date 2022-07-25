module.exports = {
    username: '',
    password: '',
    token: '',
    baseUrl: 'http://',
    database: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_ROOT_PASSWORD,
        databaseSchema: process.env.MYSQL_DATABASE_NAME
    },
    secret: "encrypt passwords"
}

