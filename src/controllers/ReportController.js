const {Op} = require('sequelize');
const User = require('../models/User');

//complex search filters: email who finish with "gmail.com", live in street "Rua Touro" and techs who the initial is "Node"
module.exports = {
    async show(req, res){
        const users = await User.findAll({
            attributes:['name', 'email'],
            where:{
                email: {
                    [Op.like]: '%@gmail.com'
                }
            },
            include:[
                {
                    association: 'addresses', 
                    where:{
                        street: 'Rua Touro'
                }},//address
                {
                    association:'techs',
                    //required: false,
                    where:{
                        name:{
                            [Op.like]: 'Node%'
                        }
                    }
                },//techs
            ]
        })
        return res.json(users);

    }
}