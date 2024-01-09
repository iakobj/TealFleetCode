const {
  usersGetAll,
  usersGetById,
  usersGetByName,
  usersGetByEmail,
  usersGetByPhone,
  usersGetByTitle,
  usersGetByRole
} = require("../services/usersServices");

// Get all users
module.exports.cUsersGetAll = async (req, res) => {
  try {
    const result = await usersGetAll();

    if (req.sessionID && req.session.user && req.session.authenticated == true) {
      console.log("Athenticated");
    }


    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res.status(404).send("No users found");
  }
};

// Get user by id
module.exports.cUsersGetById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await usersGetById(id);
    res.status(200).send({"data": result});
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .send(`The user was not found, invalid input syntax for type uuid ${id}`);
  }
};

// Get users by name
module.exports.cUsersGetByName = async (req, res) => {
  const name = req.params.name;
  try {
    const result = await usersGetByName(name);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The user was not found, invalid input syntax for type name ${name}`
        );
    } else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get user by email
module.exports.cUsersGetByEmail = async (req, res) => {
  const email = req.params.email;
  try {
    const result = await usersGetByEmail(email);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The user was not found, invalid input syntax for type email ${email}`
        );
    } else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get user by phone
module.exports.cUsersGetByPhone = async (req, res) => {
  const phone = req.params.phone;
  try {
    const result = await usersGetByPhone(phone);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The user was not found, invalid input syntax for type phone ${phone}`
        );
    } else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get users by title
module.exports.cUsersGetByTitle = async (req, res) => {
  const title = req.params.title;
  try {
    const result = await usersGetByTitle(title);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The user was not found, invalid input syntax for type title ${title}`
        );
    } else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};

// Get users by role
module.exports.cUsersGetByRole = async (req, res) => {
  const role = req.params.role;
  try {
    const result = await usersGetByRole(role);
    if (result.length === 0) {
      res
        .status(404)
        .send(
          `The user was not found, invalid input syntax for type role ${role}`
        );
    } else {
      res.status(200).send({"data": result});
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error");
  }
};
