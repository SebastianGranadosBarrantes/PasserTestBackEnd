const express = require("express");

const { users, transactions } = require("../controllers");

const router = express.Router(); //Create a new router instance


// Define routes for users 
router
  .get("/users/:pk_user", users.getUser)
  .post("/users/", users.createUser)
  .put("/users/:pk_user", users.putUser)
  .delete("/users/:pk_user", users.deleteUser);

// Define routes for transactions
router
  .post("/transactions/", transactions.createTransaction)
  .get("/transactions/", transactions.getTransaction)
  .put("/transactions/:pk_transaction", transactions.updateTransaction)
  .get("/transactions/:pk_transaction", transactions.getTransaction);

module.exports = router;
