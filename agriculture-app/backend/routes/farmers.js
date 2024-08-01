const router = require('express').Router();
let Farmer = require('../models/Farmer');

router.route('/').get((req, res) => {
  Farmer.find()
    .then(farmers => res.json(farmers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const location = req.body.location;
  const crops = req.body.crops;

  const newFarmer = new Farmer({ name, location, crops });

  newFarmer.save()
    .then(() => res.json('Farmer added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;