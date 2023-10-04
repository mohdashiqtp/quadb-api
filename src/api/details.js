const router = require('express').Router();
const { userModel } = require('../models/index');

router.get('/' ,async (req ,res) => {
  try {
    
    const userId = req.query.user_id;


    // Check if user_id is provided in the query parameters
    if (!userId) {
      return res.status(400).json({ error: 'user_id parameter is required' });
    }

    // Fetch user details based on user_id
    const user = await userModel.findByPk(userId);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Respond with user details
    res.json(user);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
});

module.exports = router;
