var express = require('express');
const { login, processLogin } = require('../controllers/usersController');
const usersController = require('../controllers/usersController');
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');
const notUserCheck = require('../middlewares/notUserCheck');
var router = express.Router();

/* User Register */
router.get('/register',notUserCheck, usersController.register);
router.post('/register', registerValidator, usersController.processRegister);
/* Login Register */
router.get('/login',notUserCheck, login);
router.post('/login',loginValidator, processLogin);

/* User Profile */
router.get('/profile/:username', usersController.profile);
router.put('/update', usersController.update);

/* User Logout */
router.get('/logout', usersController.logout);

module.exports = router;
