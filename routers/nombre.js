const express = require('express')
const router = express.Router()

const nombreController = require('../controllers/nombrecontroller')

router.get('/', nombreController.mostrar)

module.exports = router 