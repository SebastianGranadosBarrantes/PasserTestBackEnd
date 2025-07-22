const { postgresql } = require('../databases/postgresql')

/**
 * Create a transaction
 * @param {number} pk_transaction Transaction primary key
 * @param {number} fk_user User foreign key
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Juan", amount: 100.0}}
 */
const createTransaction = (pk_transaction, fk_user, description, amount) => {
    try {
        let transaction = postgresql.public.one(`insert into transactions values ('${pk_transaction}', '${fk_user}', '${description}', '${amount}') returning *;`);
        return transaction
    }
    catch (e) {
        throw new Error(`Error creating transaction: ${e.message}`)
    }
}

/**
 * Get a transaction by primary key
 * @param {number} pk_transaction Transaction primary key
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Juan", amount: 100.0}}
 */
const getTransaction = (pk_transaction) => {
    try {
        let transaction = postgresql.public.one(`select * from transactions where pk_transaction = '${pk_transaction}'`);
        return transaction
    }
    catch (e) {
        throw new Error(`Error fetching transaction: ${e.message}`)
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
    try{
        let user = postgresql.public.one(`update transactions set fk_user = '${fk_user}', description = '${description}', amount = '${amount}' where pk_transaction = '${pk_transaction}' returning *;`);
        return user
    }
    catch (e) {
        throw new Error(`Error updating transaction: ${e.message}`)
    }
    
}

/**
 * Get transactions paginated, 5 per page
 * @param {number} page Page number
 * @returns {Array<{pk_transaction: 1, fk_user: 1, description: "Juan", amount: 100.0}>}
 */
const getTransactionsPaginated = (page) => {

    try {
        let transaction = postgresql.public.many(`select * from transactions order by pk_transaction limit 5 offset ${(page - 1) * 5}`);
        return transaction
    }
    catch (e) {
        throw new Error(`Error fetching transaction: ${e.message}`)
    }
}


/**
 * Get transactions per user
 * @returns {Array<{pk_transaction: 1, fk_user: 1, description: "Juan", amount: 100.0}>}
 */
const getTransactionsPerUser = (fk_user) => {
    try {
        let transaction = postgresql.public.many(`select * from transactions where fk_user = '${fk_user}'`);
        return transaction
    }
    catch (e) {
        throw new Error(`Error fetching transactions per user: ${e.message}`)
    }
}

module.exports = {
    createTransaction,
    getTransaction,
    updateTransaction,
    getTransactionsPerUser,
    getTransactionsPaginated
}

