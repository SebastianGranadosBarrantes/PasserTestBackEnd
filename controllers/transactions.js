const transactions = require("../services/transactions");

const createTransaction = async (req, res, next) => {
  console.log("createTransaction called");
  const { pk_transaction, fk_user, description, amount } = req.body;
  try {
    let transaction = transactions.createTransaction(
      pk_transaction,
      fk_user,
      description,
      amount
    );
    res.status(200).send(transaction);
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

const getTransaction = async (req, res, next) => {
  const { pk_transaction } = req.params;
  const { fk_user } = req.query.fk_user ? req.query : {};
  const page = req.query.page ? parseInt(req.query.page) : {};
  console.log(
    `getTransaction called with pk_transaction: ${pk_transaction} and fk_user: ${fk_user}`
  );
  if (pk_transaction) {
    try {
      let transaction = transactions.getTransaction(pk_transaction);
      res.status(200).send(transaction);
      next();
    } catch (e) {
      console.log(e.message);
      res.sendStatus(500) && next(e);
    }
  } else if (fk_user) {
    try {
      let transaction = transactions.getTransactionsPerUser(fk_user);
      res.status(200).send(transaction);
      next();
    } catch (e) {
      console.log(e.message);
      res.sendStatus(500) && next(e);
    }
  } else if (page) {
    try {
      let transaction = transactions.getTransactionsPaginated(page);
      res.status(200).send(transaction);
      next();
    } catch (e) {
      console.log(e.message);
      res.sendStatus(500) && next(e);
    }
  } else {
    res.status(400).send({ error: "Invalid request parameters" });
    next(new Error("Invalid request parameters"));
  }
};

const updateTransaction = async (req, res, next) => {
  const { pk_transaction } = req.params;
  const { fk_user, description, amount } = req.body;
  try {
    let transaction = transactions.updateTransaction(
      pk_transaction,
      fk_user,
      description,
      amount
    );
    res.status(200).send(transaction);
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

module.exports = {
  createTransaction,
  getTransaction,
  updateTransaction,
};
