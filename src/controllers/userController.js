const path = require('path');
const fs = require('fs');
const User = require('../models/User');
const Users = require('../models/Users');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs')

const controller = {
    register: (req, res) => {
      return res.render('users/register');
    },
    processRegister: async (req, res) => {
      const resultValidation = validationResult(req)
      if(!resultValidation.isEmpty){
        return res.render('users/register', {
          errors: resultValidation.mapped(),
          old : req.body
        })
      }
      userInDB = await Users.findByEmail(req.body.email);
      if (userInDB.length) {
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
        category: 2
      }
      // return res.json(newUser)
      Users.create(newUser)
      return res.redirect('/users/login');
    },
    login: (req, res) => {
      return res.render('users/login');
    },
    loginProcess: async (req, res) => {
      let userToLogin = await Users.findByEmail(req.body.email);
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
              msg: 'Las contraseña es inválida'
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
  