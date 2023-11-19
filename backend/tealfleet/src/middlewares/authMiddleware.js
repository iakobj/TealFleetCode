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
// Login
module.exports.mLogin = async (email, password) => {
    return new Promise(async (resolve, reject) => {
      const userEmail = email;
      try {
        const userData = await authGetUserByEmail(userEmail);
        console.log("Reading user from the database.");
        console.log(userData);
  
        const user = userData[0];
  
        if (user.length === 0) {
          console.log("No user was found.");
          resolve({ message: "No user was found." });
        }
  
        console.log("User was found. Proceeding....");
  
        crypto.pbkdf2(
          password,
          salt,
          310000,
          32,
          "sha256",
          function (err, hashedPassword) {
            console.log("crypto.pbkdf2 process started...");
            const hexHashedPassword = hashedPassword.toString("hex");
            if (err) {
              console.log("crypto.pbkdf2 process error.");
              reject(err);
            }
            console.log("crypto.pbkdf2 Comparing passwords");
  
            console.log(user.password);
            console.log(hexHashedPassword);
  
            if (user.password !== hexHashedPassword) {
              console.log("Incorrect email or password.");
              resolve({ message: "Incorrect email or password." });
            } else {
              console.log("Login success, creating session information json...");
              const req_session_user = {
                id: user.user_id,
                role_id: user.role_id,
                tenant_id: user.tenant_id,
                site_id: user.site_id,
                firstname: user.first_name,
                lastname: user.last_name,
                phone: user.phone,
                email: user.email,
                title: user.title,
              };
              console.log(
                "Logging in possible, session creation possible, returning user info."
              );
              resolve({ user: req_session_user });
            }
          }
        );
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  };
  
  