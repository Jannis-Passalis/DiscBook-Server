const User = require("./models").user;
const List = require("./models").list;
const Cd = require("./models").cd;

async function listWithUser() {
  const users = await List.findAll({ include: { model: User } });
  return users.map((user) => user.get({ plain: true }));
}

// listWithUser().then((user) => console.log(user));

async function CdWithListWithUser() {
  const users = await Cd.findAll({
    include: { model: List, include: { model: User } },
  });
  return users.map((user) => user.get({ plain: true }));
}

// CdWithListWithUser().then((user) => console.log(user));
