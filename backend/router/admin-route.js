const express = require('express')
const router = express.Router()
const {getAlluser,getAllContacts} = require('../controllers/admin-controllers')
const authMiddleware = require('../middlewares/auth-middleware')
const adminMiddleware = require('../middlewares/adminmiddleware')



router.route('/users').get(authMiddleware,adminMiddleware,getAlluser)
router.route('/contacts').get(getAllContacts)



module.exports = router;
