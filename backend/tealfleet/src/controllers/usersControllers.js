const {
  usersGetAll,
  usersGetById,
  usersGetByName,
  usersGetByEmail,
  usersGetByPhone,
  usersGetByTitle,
  usersGetByRole,
  usersGetMe,
} = require("../services/usersServices");

const { checkIdentity } = require("../middlewares/identity");

module.exports.cUsersGetAll = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await usersGetAll(identity);

    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cUsersGetById = async (req, res) => {
  const user_id = req.params.id;
  try {
    const identity = await checkIdentity(req);
    const result = await usersGetById(identity, user_id);
    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result});
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cUsersGetByName = async (req, res) => {
  const first_name = req.params.name;
  try {
    const identity = await checkIdentity(req);
    const result = await usersGetByName(identity, first_name);
    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result});
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cUsersGetByEmail = async (req, res) => {
  const email = req.params.email;
  try {
    const identity = await checkIdentity(req);
    const result = await usersGetByEmail(identity, email);
    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cUsersGetByPhone = async (req, res) => {
  const phone = req.params.phone;
  try {
    const identity = await checkIdentity(req);
    const result = await usersGetByPhone(identity, phone);
    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cUsersGetByTitle = async (req, res) => {
  const title = req.params.title;
  try {
    const identity = await checkIdentity(req);
    const result = await usersGetByTitle(identity, title);
    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cUsersGetByRole = async (req, res) => {
  const role = req.params.role;
  try {
    const identity = await checkIdentity(req);
    const result = await usersGetByRole(identity, role);
    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};

module.exports.cUsersGetMe = async (req, res) => {
  try {
    const identity = await checkIdentity(req);
    const result = await usersGetMe(identity);
    if (result[0] && result[0].error) {
      res.status(401).send({ data: result });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (error) {
    res.status(404).send({data: [{error}]});
  }
};
