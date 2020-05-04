const { Model, DataTypes } = require('sequelize');

class Tech extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'techs',
        });
    }
    static associate(models){
        this.belongsToMany(models.User, {foreignKey: 'tech_id', through: 'user_techs', as: 'user'})
        // if i want make more relationships
        //this.belongsTo(model.User, {foreignKey: 'user_id', as: 'user'})
        //this.belongsTo(model.User, {foreignKey: 'user_id', as: 'user'})
    }
}

module.exports = Tech;