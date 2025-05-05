const express = require('express')
// const app = express()
const router = express.Router()
const authControllers = require('../controllers/auth-controllers')
//  const register = require('../controllers/auth-controllers')
const validate = require('../middlewares/validate-middleware')
const signupSchema = require('../validators/auth-validator')
const authMiddleware = require('../middlewares/auth-middleware')

router.get('/',authControllers.home)
router.post('/register',validate(signupSchema),authControllers.register)
router.post('/login',authControllers.login)
router.route("/user").get(authMiddleware, authControllers.user);


module.exports = router;
