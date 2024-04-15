

const users = [
  {
    id: 1,
    name: "Pepe",
    email: "pepe@gmail.com",
    password: "1234",
  }];

const getAll = async (req, res) => {

  res.json({users, instant: req.requestInstant});
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = users.find((user) => user.id === Number(id));
  res.json(result);
};

const create = async (req, res) => {
  const body = req.body;

  users.push(body);
  res.send(users);
};


module.exports = { getAll, create, getById };
