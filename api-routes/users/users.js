const express = require('express');

const router = express.Router();

const { registerNewUser } = require('../../controllers/users/users');

router.post('/register', (req, res) => {
  registerNewUser(req, res);
});

module.exports = router;
