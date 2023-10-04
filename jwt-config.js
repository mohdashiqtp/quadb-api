require('dotenv').config();

const secretKey = process.env.JWT_SECRET;


module.exports = {
    secretKey: secretKey, // Replace with a strong secret key
    expiresIn: '1h', // Token expiration time
  };
  