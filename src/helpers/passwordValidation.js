"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | STOCK MANAGEMENT API
------------------------------------------------------- */
const passwordEncrypt = require("./passwordEncrypt")
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,20}$/

module.exports = (password) => {
    if(passwordRegex.test(password)){
       return passwordEncrypt(password) 
    } else {
        throw new Error("Please provide the credentials for your password")
    }
}