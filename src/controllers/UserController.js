const User = require('../models/User')

module.exports = {
    //list all users
    async index(req, res) {
        const users = await User.findAll();
        return res.json(users);
    },


    //add an User
    async store(req, res) {
        const { name, email } = req.body;

        const user = await User.create({name, email});

        return res.json(user);

    }
}