const { User } = require('../models');

const userData = [
    {
        username: "zeno",
        password: "mynameiszeno"
    },
    {
        username: "coolerguy",
        password: "coolestguyaround2000"
    },
    {
        username: "radfarmer",
        password: "farmingisthebest100"
    },
    {
        username: "techperson",
        password: "Iliketechstuff45"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;