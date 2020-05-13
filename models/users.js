const db = require('../../config/db');
const bcrypt = require('bcrypt');

const encryptPassword = (userPassword, saltRounds) => {
  const encryptedPassword = bcrypt.hashSync(userPassword, saltRounds);
  return encryptedPassword;
};

const insertNewUser = (userEmail, userPassword) => {
  const saltRounds = 10;
  const encryptedPassword = encryptPassword(userPassword, saltRounds);
  return db('users').insert({
    email: userEmail,
    password: encryptedPassword,
  });
};

module.exports = {
  insertNewUser: insertNewUser,
};
