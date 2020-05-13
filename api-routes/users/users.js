const express = require('express');

const router = express.Router();

/**
 * This is where the workflow: routes -> middlware -> controller happens *
 **/

const {
  validateUserData,
  getUserValidationResults,
} = require('../../middlewares/validations/users');

const { registerNewUser } = require('../../controllers/users/users');
const { registerNewPerson } = require('../../controllers/persons/persons');

router.post('/register', async (req, res) => {
  const {
    userEmail,
    userPassword,
    name,
    lastName,
    alias,
    phoneNumber,
  } = req.body;

  try {
    /** START: New user fields validation **/
    await validateUserData(req);
    let userValidationResults = getUserValidationResults(req);
    /** END: New user fields validation **/

    if (userValidationResults !== false) {
      res.status(422).json(userValidationResults);
    } else {
      registerNewUser(req, res, userEmail, userPassword);
      registerNewPerson(req, res, name, lastName, alias, phoneNumber);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
