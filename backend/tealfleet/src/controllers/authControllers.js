const {
  authLogin,
  authGetUserByEmail,
  authLogout,
  authRegister,
} = require("../services/authServices");

const { mPassportVerify } = require("../middlewares/authMiddleware");

// Login
module.exports.cAuthLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    await mPassportVerify(email, password);

    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send("Login failed");
  }
};

// Log out
module.exports.cAuthLogout = async (req, res) => {
  try {
    const result = await authLogout();

    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send("Logout failed");
  }
};

// Register
module.exports.cAuthRegister = async (req, res) => {
  try {
    const result = await authRegister();

    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send("Register failed");
  }
};
