const router = require("express").Router()
const { userModel } = require('../models/index')


router.delete('/' , (req, res) => {
    try{

        const userIdToDelete = req.query.user_id

        userModel.destroy({
            where: {
              user_id: userIdToDelete,
            },
          })
            .then((rowsDeleted) => {
              if (rowsDeleted === 1) {
                // The record was successfully deleted
                console.log('User deleted successfully');
                res.status(200).json({ message: 'User deleted successfully' });
              } else {
                // No records were deleted (user_id not found)
                console.log('User not found');
                res.status(404).json({ error: 'User not found' });
              }
            })
            .catch((error) => {
              console.error('Error deleting user:', error);
              res.status(500).json({ error: 'Internal server error' });
            });

    } catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

module.exports = router