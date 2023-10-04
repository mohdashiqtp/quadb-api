const router = require('express').Router()
const { userModel } = require('../models/index')
const jwtAuthMiddleware  = require('../middlewares/auth')

router.put("/", jwtAuthMiddleware ,(req, res) => {

    try {

        const { user_id } = req.user

        const {  user_name, user_email, user_password, user_image } = req.body

        const totalOrders = parseInt(req.body.total_orders, 10);


        // Define the condition for updating (based on user_id)
        const condition = {
            where: {
                user_id,
            },
        };

        // All required properties are present and not undefined
        const updatedUserData = {
            user_id ,
            user_name,
            user_email,
            user_password,
            user_image,
            total_orders : totalOrders
        }


        // Use the update method to update the user's details
        const newUser = userModel.update(updatedUserData, condition)
            .then((result) => {
                if (result[0] === 1) {
                    console.log('User updated successfully');
                } else {
                    console.log('User not found or no updates made');
                }
            })
            .catch((error) => {
                console.error('Error updating user:', error);
            });


        res.status(200).json({ newUser , message: 'User details updated successfully' });


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

})

module.exports = router