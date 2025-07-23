const users = require("../services/users");
const getUser = async (req, res, next) => {
  console.log("getUser called");
  const { pk_user } = req.params;
  console.log(`Fetching user with pk_user: ${pk_user}`);
  try {
    let user = await users.getUser(pk_user);
    res.status(200).send(user);
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

const putUser = async (req, res, next) => {
  const { pk_user } = req.params;
  const { name, status } = req.body;
  console.log(`The request body is ${JSON.stringify(req.body)}`);
  console.log(`The name is ${name} and the status is ${status}`);
  try {
    let user = users.updateUser(pk_user, name, status);
    res.status(200).send(user);
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

const deleteUser = async (req, res, next) => {
  const { pk_user } = req.params;
  try {
    let user = await users.deleteUser(pk_user);
    res.status(200).send(user);
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

const createUser = async (req, res, next) => {
  const { pk_user, name } = req.body;
  try {
    let user = users.createUser(pk_user, name);
    res.status(200).send(user);
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

module.exports = {
  getUser,
  putUser,
  deleteUser,
  createUser,
};
