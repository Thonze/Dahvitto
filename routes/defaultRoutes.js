const express = require('express')
const router = express.Router()
const defaultControllers = require('../controllers/defaultControllers')

router.route('/')
.get(defaultControllers.index)


router.route('/about')
.get(defaultControllers.About)

router.route('/services')
.get(defaultControllers.Services)

router.route('/recent-works')
.get(defaultControllers.Portfolio)

router.route('/pricing')
.get(defaultControllers.Pricing)

router.route('/team')
.get(defaultControllers.Pricing)

router.route('/contact-us')
.get(defaultControllers.Contact)














module.exports = router