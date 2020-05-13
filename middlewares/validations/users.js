const { check, validationResult } = require('express-validator');

async function validateUserData(req) {
  try {
    await check('userEmail')
      .exists({ checkFalsy: true })
      .withMessage('Email field can not be empty')
      .bail()
      .run(req);
    await check('userEmail')
      .isEmail()
      .withMessage('Must be a valid email address')
      .bail()
      .run(req);
    await check('userPassword')
      .exists({ checkFalsy: true })
      .withMessage('Password field can not be empty')
      .run(req);
    await check('name')
      .exists({ checkFalsy: true })
      .withMessage('Name field can not be empty')
      .run(req);
    await check('lastname')
      .exists({ checkFalsy: true })
      .withMessage('Lastname field can not be empty')
      .run(req);
    await check('phoneNumber')
      .exists({ checkFalsy: true })
      .withMessage('Phone number field can not be empty')
      .run(req);
  } catch (error) {
    console.log(error);
  }
}

const getUserValidationResults = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorsArray = errors.array();
    const errorMsgs = errorsArray.map((value) => {
      return value.msg;
    });
    return errorMsgs;
  } else {
    return false;
  }
};

module.exports = {
  validateUserData: validateUserData,
  getUserValidationResults: getUserValidationResults,
};
