const router = require("express").Router()
const { userModel } = require('../models/index')

router.get('/', async (req, res) => {

    try {

        const { user_id } = req.query

        // Check if user_id is provided in the query parameters
        if (!user_id) {
            return res.status(400).json({ error: 'user_id parameter is required' });
        }

        // Fetch user details based on user_id
        const user = await userModel.findByPk(user_id);

        const userImage = user.user_image

        //check if user exist
        if(!user){

            return res.status(400).json({ error : "user does not exist" })

        }

        return res.status(200).json({ userImage })


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

})

module.exports = router