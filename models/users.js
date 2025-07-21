const { postgresql } = require('../databases/postgresql')

/**
 * Get an specific user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @returns {{pk_user: 1, name: "Juan"}}
 */
const createUser = (pk_user, name) => {
    try {
        let user = postgresql.public.one(`insert into users values ('${pk_user}', '${name}', status) returning *;`);
        return user
    }
    catch (e) {
        throw new Error(`Error creating user: ${e.message}`)
    }
}

/**
 * Update an specific user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @returns {{pk_user: 1, name: "Juan"}}
 */
const updateUser = (pk_user, name, status) => {
    console.log(`The name is ${name} and the status is ${status}`)
    try{
        let user = postgresql.public.one(`update users set name = '${name}', status = '${JSON.parse(status)}' where pk_user = '${pk_user}' returning *;`);
        return user
    }
    catch (e) {
        throw new Error(`Error updating user: ${e.message}`)
    }
    
}

/**
 * Get an specific user
 * @param {number} pk_user User primary key
 * @returns {{pk_user: 1, name: "Juan"}} User schema
 */
const getUser = (pk_user) => {
    try{
        let user = postgresql.public.one(`select * from users where pk_user = '${pk_user}'`);
    return user
    }
    catch (e) {
        throw new Error(`Error getting user: ${e.message}`)
    }
}

/**
 * Delete an specific user
 * @param {number} pk_user User primary key
 * @returns {pk_user: 1} User primary key
 */
const deleteUser = (pk_user) => {
    try {
        let user = postgresql.public.one(`delete from users where pk_user = '${pk_user}' returning pk_user;`);
        return user
    } catch (e) {
        throw new Error(`Error deleting user: ${e.message}`)
    }
}

module.exports = { // Exporting the functions
    createUser,
    getUser,
    updateUser,
    deleteUser
}