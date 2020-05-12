const registerNewUser = (req, res) => {
  const { userEmail, userPassword } = req.body;
  res.status(200).send(`${userEmail}, ${userPassword}`);
};

module.exports = {
  registerNewUser: registerNewUser,
};
