//database config for the sequelize ORM

module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'admin',
    database: 'sqlnode',
    define: {
        timestamp:true,
        underscored:true,
    }
}