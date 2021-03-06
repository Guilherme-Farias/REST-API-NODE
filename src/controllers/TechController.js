const Tech = require('../models/Tech')
const User = require('../models/User')


module.exports = {
    //list all techs by user_id
    async index(req, res) {
        const {user_id} = req.params;
        //inside the attribute you can put the name of attribute do you want return, how i dont need him, just return an empty array
        const user = await User.findByPk(user_id, {
            include:{association:'techs', through:{
                attributes:[]
            }}});
        if(!user){
            return res.status(400).json({error:"User not found"})
        }

        return res.json(user.techs)


    },


    //add techs by user_id
    async store(req, res) {
        const {user_id} = req.params;
        const {name} = req.body;
        
        const user = await User.findByPk(user_id);
        
        if(!user){
            return res.status(400).json({error:"User not found"})
        }
        
        const [tech] = await Tech.findOrCreate({
            where: { name }
        });
        await user.addTech(tech);
        
        return res.json(tech);
    },
    
    //delete the relationship from tech and user
    async delete(req, res){
        const {user_id} = req.params;
        const {name} = req.body;
        const user = await User.findByPk(user_id);
        if(!user){
            return res.status(400).json({error:"User not found"})
        }    

        const tech = await Tech.findOne({
            where: {name}
        });

        await user.removeTech(tech);

        return res.json()

    }
}