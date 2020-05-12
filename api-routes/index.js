const router = require('express').Router();

router.get('/', (req, res) => {
  res.send(
    `Welcome to "APChallenge Calendar edition", enjoy the buggy ride of my coffee driven application. Made in 1 week.`
  );
});

module.exports = router;
