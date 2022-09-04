const { User } = require("../models");

    const userData = [
    {
      "username": "Kelly",
      "email": "kelly@hotmail.com",
      "password": "Password12345"
    },
    {
      "username": "Nug",
      "email": "nug@gmail.com",
      "password": "Test123!"
    },
    {
      "username": "Chris",
      "email": "chris@test.com",
      "password": "Password123!"
    }
  ]

    const seedUsers = async () => {
      for (const user of userData) {
        await User.create(user);
      }
    }

    module.exports = seedUsers;