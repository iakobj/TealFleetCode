var express = require("express");
var crypto = require("crypto");

const {
  authLogin,
  authGetUserByEmail,
  authLogout,
  authRegister,
} = require("../services/authServices");

salt = "saltymcsaltface";


// Login
module.exports.mPassportVerify = async (req, res, next) => {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({ message: info.message });
    }

    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }

      return res.json({ message: "Login successful", user });
    });
  })(req, res, next);
};
