const { User } = require("../models");

const userData = [
  {
    name: "zeno",
    password: "mynameiszeno",
  },
  {
    name: "coolerguy",
    password: "coolestguyaround2000",
  },
  {
    name: "radfarmer",
    password: "farmingisthebest100",
  },
  {
    name: "techperson",
    password: "Iliketechstuff45",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
