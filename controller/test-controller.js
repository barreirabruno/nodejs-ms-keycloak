const express = require('express')
const router = express.Router()
const keycloak = require('../config/keycloak-config.js').getKeycloak()

router.get('/anonymous', function(req, res) {
  res.status(200).json({
    messgae: "[HELLO ###ANONYMOUS###]"
  })
})

router.get('/user', keycloak.protect('user'), function(req, res) {
  res.status(200).json({
    messgae: "[HELLO ###USER###]"
  })
})

router.get('/admin', keycloak.protect('admin'), function(req, res) {
  res.status(200).json({
    messgae: "[HELLO ###ADMIN###]"
  })
})

router.get('/all-user', keycloak.protect(['user', 'admin']), function(req, res) {
  res.status(200).json({
    messgae: "[HELLO ###AALLL USER###]"
  })
})

module.exports = router