const { Console } = require('console');
const crypto = require('crypto');
require("dotenv").config();

const password = "tealfleet";
const salt = "saltymcsaltface";

crypto.pbkdf2(password, salt, 310000, 32, 'sha256', function(err, hashedPassword) {
    console.log(`Password:  "${password}"  will be salted with: "${salt}" The result is: `);
    console.log(hashedPassword.toString('hex'));
    });