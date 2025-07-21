const { postgresql } = require('../databases/postgresql')
const transactionsModel = require('../models/transactions')


/**
 * Create a transaction
 * @param {number} pk_transaction Transaction primary key
 * @param {number} fk_user User foreign key
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Juan", amount: 100.0}}
 */
const createTransaction = (pk_transaction, fk_user, description, amount) => {
    console.log(`Creating transaction with pk_transaction: ${pk_transaction}, fk_user: ${fk_user}, description: ${description}, amount: ${amount}`);
    try {
        return transactionsModel.createTransaction(pk_transaction, fk_user, description, amount)
    } catch (e) {
        throw new Error(e.message)
    }
}

/**
 * Create a transaction
 * @param {number} pk_transaction Transaction primary key
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Juan", amount: 100.0}}
 */
const getTransaction = (pk_transaction) => {
    try {
        return transactionsModel.getTransaction(pk_transaction)
    } catch (e) {
        throw new Error(e.message)
    }
}


module.exports = {
    createTransaction,
    getTransaction
}

