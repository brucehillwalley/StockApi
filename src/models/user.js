"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | STOCK MANAGEMENT API
------------------------------------------------------- */
const {
  mongoose: { Schema, model },
} = require("../configs/dbConnection");
/* ------------------------------------------------------- */
const passwordValidation = require("../helpers/passwordValidation");
const emailValidation = require("../helpers/emailValidation");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
    },

    password: {
      type: String,
      trim: true,
      required: true,
      set: (password) => passwordValidation(password), //! password validation and encrypt
    },

    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      set: (email) => emailValidation(email), //! email validation
      index: true,
    },

    firstName: {
      type: String,
      trim: true,
      required: true,
    },

    lastName: {
      type: String,
      trim: true,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    isStaff: {
      type: Boolean,
      default: false,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

/* ------------------------------------------------------- */
module.exports = model("User", UserSchema);

// UserSchema.pre(['save', 'updateOne'], function (next) {

//     // get data from "this" when create;
//     // if process is updateOne, data will receive in "this._update"
//     const data = this?._update || this

//     // email@domain.com
//     const isEmailValidated = data.email
//         ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email) // test from "data".
//         : true

//     if (isEmailValidated) {

//         if (data?.password) {

//             // pass == (min 1: lowerCase, upperCase, Numeric, @$!%*?& + min 8 chars)
//             const isPasswordValidated = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(data.password)

//             if (isPasswordValidated) {

//                 this.password = data.password = passwordEncrypt(data.password)
//                 this._update = data // updateOne will wait data from "this._update".

//             } else {

//                 next(new Error('Password not validated.'))
//             }
//         }

//         next() // Allow to save.

//     } else {

//         next(new Error('Email not validated.'))
//     }
// })
