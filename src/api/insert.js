const router = require('express').Router()
const { userModel } = require('../models/index')
const jwt = require('jsonwebtoken');
const { secretKey, expiresIn } = require('../../jwt-config');
router.post('/', async (req, res) => {
    try {

        const { user_name, user_email, user_password, user_image } = req.body

        const totalOrders = parseInt(req.body.total_orders, 10);

        const newUser = {
            user_name,
            user_email,
            user_image,
            user_password,
            total_orders: totalOrders
        }

        userModel.create(newUser)

            .then((user) => {


                const jwtPayload = {
                    username: user.user_name,
                    email: user.user_email,
                    userId: user.user_id

                }

                console.log(jwtPayload)

                // Create a JWT token for the user
                const token = jwt.sign(jwtPayload, secretKey);

                res.status(200).json({ message: 'user created', token })


            })
            .catch((error) => {

                console.log(error)

                return res.status(400).json({ error: "failed to create user", error })
            });



    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

module.exports = router

