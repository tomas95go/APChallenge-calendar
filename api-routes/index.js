const router = require('express').Router();
/**
 * usersOperations: C.R.U.D. *
 * The idea here is index.js works as an entry point for the entire app *
 * which means that every route will go trough here then to the controller *
 * So the workflow would be: Server.js -> api-routes/index.js -> routes -> controller -> model *
 * */
const usersOps = require('./users/users');

router.get('/', (req, res) => {
  res.send(
    `Welcome to "APChallenge Calendar edition", enjoy the buggy ride of my coffee driven application. Made in 1 week.`
  );
});

router.use('/users', usersOps);

module.exports = router;
