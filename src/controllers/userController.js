const path = require('path');
const fs = require('fs');
const User = require('../models/User');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const dbUsers = path.join(__dirname, '../database/users.json');

const readJsonFile = (path) => {
    const data = fs.readFileSync(path, 'utf-8');
    const dataParse = JSON.parse(data);
    return dataParse;
};

const controller = {
    register: (req, res) => {
        return res.render('users/register');
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req)
        if(resultValidation.errors.length > 0){
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                old : req.body
            })
        }else{
            const newUser = {
                ...req.body,
                password: bcrypt.hashSync(req.body.password, 10),
                category: "user"
            }
            User.create(newUser)
            return res.send(newUser);
        }
    },
    login: (req, res) => {
        return res.render('users/login');
    }
  };
  module.exports = controller;
  