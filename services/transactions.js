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
 * Get a transaction by primary key
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

/**
 * Get a transaction paginated, 5 per page
 * @param {number} page Page number
 * @returns {Array<{pk_transaction: 1, fk_user: 1, description: "Juan", amount: 100.0}>}
 */
const getTransactionsPaginated = (page) => {
    try {
        return transactionsModel.getTransactionsPaginated(page)
    } catch (e) {
        throw new Error(e.message)
    }
}


/**
 * Get a transaction by primary key
 * @param {number} fk_user Transaction primary key
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Juan", amount: 100.0}}
 */
const getTransactionsPerUser = (fk_user) => {
    try {
        return transactionsModel.getTransactionsPerUser(fk_user)
    } catch (e) {
        throw new Error(e.message)
    }
}

/**
 * Update a transaction
 * @param {number} pk_transaction Transaction primary key
 * @param {number} fk_user User foreign key
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Juan", amount: 100.0}}
 */
const updateTransaction = (pk_transaction, fk_user, description, amount) => {
    try {
        return transactionsModel.updateTransaction(pk_transaction, fk_user, description, amount)
    } catch (e) {
        throw new Error(e.message)
    }
}


module.exports = {
    createTransaction,
    getTransaction,
    updateTransaction,
    getTransactionsPerUser,
    getTransactionsPaginated
}

