const { Model, DataTypes } = require('sequelize');


class User extends Model{
    static init(sequelize){
        //fields of User model
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,

        }, {
            sequelize
        })
    };
    //configure the relationships
    static associate(models){
        this.hasMany(models.Address, {foreignKey: 'user_id', as: 'addresses'});
        this.belongsToMany(models.Tech, {foreignKey: 'user_id', through: 'user_techs', as: 'techs'});
    };
}

module.exports = User;