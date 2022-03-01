var express = require('express');
var router = express.Router();
var User =require('../models/user.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fernando' });
});
router.get('/api/data', async function(req, res) {
  // res.header("Access-Control-Allow-Origin", "*");
  try {
    const users = await User.find();

    if (!users) {
      throw new Error("Server Error");
    }

    res.status(200).json({ data: users });
  } catch (error) {
    res.status(404).json({ message: "No se encontro data" });
  }
});
router.post('/api/enviar', async function(req, res) {
  // res.header("Access-Control-Allow-Origin", "*");
  try {
    const { user, email } = req.body;
    const userCreated = await User.create({ user, email });
    res.status(200).json({ data: userCreated });
  } catch (error) {
    res.status(404).json({ message: "No se pudo crear" });
  }
});

module.exports = router;
