console.log('Script is running...');

const bcrypt = require('bcrypt');
const crypto = require('crypto');

const username = 'admin1'; 
const password = 'pa55word'; 
const email = 'mikael.oling@icloud.com' 
const userRole = 'admin';

bcrypt.hash(password, 10, (err, hash) => {
  if (err) {
    console.error(err);
    return;
  }

  const accessToken = crypto.randomBytes(128).toString('hex');
  
  const adminUser = {
    username,
    password: hash,
    email,
    userRole,
    accessToken,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  console.log('Admin User Data:', adminUser);
});
