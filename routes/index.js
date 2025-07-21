const express = require('express')

const { users, transactions } = require('../controllers')

const router = express.Router() //Create a new router instance

router.get('/users/:pk_user', users.getUser)
    .post('/users/', users.createUser).put('/users/:pk_user', users.putUser).delete('/users/:pk_user', users.deleteUser)

router.post('/transactions/', transactions.createTransaction ) . get('/transactions/:pk_transaction', transactions.getTransaction)

module.exports = router