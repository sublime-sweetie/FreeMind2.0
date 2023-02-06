// const router = require('express').Router();
// const { Router } = require('express');
// const User = require('../../models/User');
// const users = require('../../models/User');

// //\\--USER BUILDER--\\//
// router.post('/', (req, res) => {
//     //\\--CREATE-\\//
//     User.create({
//         id: req.body.id,
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         password: req.body.password,
//         email: req.body.email
//     })
//     .then((newUser)=> {
//         //\\--STORES NEW USER IN THE DB AS A JSON OBJECT--\\//
//         res.json(newUser);
//     })
//     .catch((err) => {
//         res.json(err);
//   });
// });

const router = require('express').Router();
const{ User} = require('../../models');
// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
