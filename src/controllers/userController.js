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
        }
        userInDB = User.findByField('email', req.body.email);
        if (userInDB) {
            return res.render('users/register', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                old : req.body
            })
        }

        const newUser = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            passwordConfirmation: true,
            category: "user"
        }
        User.create(newUser)
        return res.redirect('/users/login');
        
    },
    login: (req, res) => {
        return res.render('users/login');
    },
    loginProcess: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);
        if (!userToLogin) {
            return res.render('users/login', {
                errors: {
                    login: {
                        msg: 'Error al tratar de ingresar'
                    }
                }
            });
        }
        passwordVerificated = bcrypt.compareSync(req.body.password, userToLogin.password)
        if (!passwordVerificated) {
            return res.render('users/login', {
                errors: {
                    login: {
                        msg: 'Las credenciales son inválidas'
                    }
                }
            });
        }
        return res.send('ok puedes ingresar')
    }
  };
  module.exports = controller;
  