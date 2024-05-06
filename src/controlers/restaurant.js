

const restaurants = [
  {
    id: 1,
    name: "Burger King",
    owner: "John Doe",
    description: "The best burgers in town",
    categories: ["Fast Food"],
  },
  {
    id: 2,
    name: "Pizza Hut",
    owner: "Jane Doe",
    categories: ["Fast Food"],
  },
  {
    id: 3,
    name: "KFC",
    owner: "John Doe",
    categories: ["Fast Food"],
  }];

const getAll = async (req, res) => {
  const query = req.query;

  console.log(query);

  res.json(restaurants.filter((restaurant) => restaurant.name.includes(query.name)));
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = restaurants.find((restaurant) => restaurant.id === Number(id));
  res.json(result);
};

const create = async (req, res) => {
  const body = req.body;

  restaurants.push(body);
  res.send(restaurants);
};


module.exports = { getAll, create, getById };
