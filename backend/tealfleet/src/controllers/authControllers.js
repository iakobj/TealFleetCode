const {
  authLogin,
  authGetUserByEmail,
  authLogout,
  authRegister,
  authAuthorization,
} = require("../services/authServices");

const { mLogin } = require("../middlewares/authMiddleware");

// Login
module.exports.cAuthLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email == null || password == null) {
      return res.status(403).send({ message: "No data was sent." });
    }
    mLogin(email, password)
      .then((result) => {
        req.session.user = result.user;
        req.session.authenticated = true;
        return res.json({ user: req.session.user });
      })
      .catch((err) => {
        res.status(403).send({ message: err });
      });
  } catch (err) {
    res.status(403).send("Login failed");
  }
};

// Log out
module.exports.cAuthLogout = async (req, res) => {
  try {
    const result = await authLogout();

    res.status(200).send({ data: result });
  } catch (err) {
    res.status(404).send(err);
  }
};

// Register
module.exports.cAuthRegister = async (req, res) => {
  try {
    const result = await authRegister();

    res.status(200).send({ data: result });
  } catch (err) {
    res.status(404).send("Register failed");
  }
};

// Authorization
module.exports.cAuthAuthorization = async (req, res) => {
  try {
    const sessionID = req.sessionID;
    const result = await authAuthorization(sessionID);
    if (
      result[0] &&
      typeof result[0].sid !== "undefined" &&
      result[0].sid === sessionID
    ) {
      res.status(200).send({ data: "true" });
    } else {
      res
        .status(403)
        .send({
          data: [{ error: "sessionID is not defined or does not match sid" }],
        });
    }
  } catch (err) {
    console.log(err);
    res.status(403).send(err);
  }
};
