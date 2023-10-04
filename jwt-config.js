require('dotenv').config();
const crypto = require('crypto');

// Generate a random secret key (64 bytes)
const secretKey = crypto.randomBytes(64).toString('hex');

module.exports = {
    secretKey: secretKey, // Replace with a strong secret key
    expiresIn: '1h', // Token expiration time
  };
  
