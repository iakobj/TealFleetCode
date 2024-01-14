const {
  usersGetAll,
  usersGetById,
  usersGetByName,
  usersGetByEmail,
  usersGetByPhone,
  usersGetByTitle,
  usersGetByRole
} = require("../services/usersServices");

module.exports.cUsersGetAll = async (req, res) => {
  try {
    const result = await usersGetAll(req);
    if(result[0] && result[0].error) {
      res.status(401).send({"data": result});
    }else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(404).send("Users not found");
  }
};

module.exports.cUsersGetById = async (req, res) => {
  const user_id = req.params.id;
  try {
    const result = await usersGetById(req, user_id);
    if(result[0] && result[0].error) {
      res.status(401).send({"data": result});
    }else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(404).send("User was not found");
  }
};

module.exports.cUsersGetByName = async (req, res) => {
  const name = req.params.name;
  try {
    const result = await usersGetByName(req, name);
    if(result[0] && result[0].error) {
      res.status(401).send({"data": result});
    }else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(404).send("User was not found");
  }
};

module.exports.cUsersGetByEmail = async (req, res) => {
  const email = req.params.email;
  try {
    const result = await usersGetByEmail(req, email);
    if(result[0] && result[0].error) {
      res.status(401).send({"data": result});
    }else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(404).send("User was not found");
  }
};

module.exports.cUsersGetByPhone = async (req, res) => {
  const phone = req.params.phone;
  try {
    const result = await usersGetByPhone(req, phone);
    if(result[0] && result[0].error) {
      res.status(401).send({"data": result});
    }else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(404).send("User was not found");
  }
};

module.exports.cUsersGetByTitle = async (req, res) => {
  const title = req.params.title;
  try {
    const result = await usersGetByTitle(req, title);
    if(result[0] && result[0].error) {
      res.status(401).send({"data": result});
    }else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(404).send("User was not found");
  }
};

module.exports.cUsersGetByRole = async (req, res) => {
  const role = req.params.role;
  try {
    const result = await usersGetByRole(req, role);
    if(result[0] && result[0].error) {
      res.status(401).send({"data": result});
    }else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(404).send("User was not found");
  }
};
