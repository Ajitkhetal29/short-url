const User = require("../models/user");
const { setUser } = require("../services/autrh")
const { v4 : uuidv4 } = require ('uuid');


async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });

  return res.render("/");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  console.log("User", user)

  if (!user) {
    return res.render('login', {
      error: "Invalid Username or Password"
    })
  };
  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie('uid', sessionId);
  return res.redirect("/");

}

module.exports = {
  handleUserSignUp,
  handleUserLogin
};