const express = require('express')

const { users } = require('../controllers')

const router = express.Router() //Create a new router instance

router.get('/users/:pk_user', users.getUser)
    .post('/users/', users.createUser).put('/users/:pk_user', users.putUser)
console.log("Exported routes")
module.exports = router