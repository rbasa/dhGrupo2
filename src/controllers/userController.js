const path = require('path');
const fs = require('fs');
const User = require('../models/User');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs')
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
          password: bcryptjs.hashSync(req.body.password, 10),
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
                    msg: 'Las credenciales son inválidas'
                  }
              }
          });
      }
      let passwordVerificated = bcryptjs.compareSync(req.body.password, userToLogin.password)
      if (!passwordVerificated) {
        return res.render('users/login', {
            errors: {
                login: {
                    msg: 'Las credenciales son inválidas'
                }
            }
        });
      }
      delete userToLogin.password;
      req.session.userLogged = userToLogin;
      if (req.body.recordar) {
          res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
      }
      return res.redirect('/users/profile')
    },
    profile: (req, res) => {
		return res.render('users/userProfile', {
			user: req.session.userLogged
		});
	},
  logout: (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy;
    res.redirect('/')
  }
};
module.exports = controller;
  