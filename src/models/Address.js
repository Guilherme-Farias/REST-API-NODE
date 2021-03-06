const { Model, DataTypes } = require('sequelize');

class Address extends Model{
    static init(sequelize){
        //fields of the model Address
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,


        }, {
            sequelize
        });
    }
    //configure the relationships
    static associate(models){
        this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
        // if i want make more relationships
        //this.belongsTo(model.User, {foreignKey: 'user_id', as: 'user'})
        //this.belongsTo(model.User, {foreignKey: 'user_id', as: 'user'})
    }
}

module.exports = Address;