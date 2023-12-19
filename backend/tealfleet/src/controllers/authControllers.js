const {
  authLogin,
  authGetUserByEmail,
  authLogout,
  authRegister,
} = require("../services/authServices");

const { mLogin } = require("../middlewares/authMiddleware");

// Login
module.exports.cAuthLogin = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    
    if (email == null || password == null) {
      console.log("No data was sent to cAuthLogin ");
      return res.sendStatus(403);
    }

    mLogin(email, password)
      .then((result) => {
        console.log("Result from mLogin middleware is: ");
        req.session.user = result.user;
        req.session.authenticated = true;
        return res.json({ user: req.session.user });
      })
      .catch((err) => {
        console.log(err);
        res.status(403).send({ message: "Login failed" });
      });
  } catch (err) {
    console.log(err);
    res.status(403).send("Login failed");
  }
};

// Log out
module.exports.cAuthLogout = async (req, res) => {
  try {
    const result = await authLogout();

    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res.status(404).send("Logout failed");
  }
};

// Register
module.exports.cAuthRegister = async (req, res) => {
  try {
    const result = await authRegister();

    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res.status(404).send("Register failed");
  }
};
