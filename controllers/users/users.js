//const { insertNewUser } = require('../../models/');
//const { insertNewPerson } = require('../../model/');

const registerNewUser = (req, res) => {
  const { userEmail, userPassword, name, lastName } = req.body;
  res.send(`${userEmail}, ${userPassword}`);
  //insertNewUser(userEmail, userPassword);
  //insertNewPerson(name, lastName);
};

module.exports = {
  registerNewUser: registerNewUser,
};
