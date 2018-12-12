const express = require('express');
const flats = express();
const models = require('../models');

//  index
flats.get('/', (req, res) => { //  Flats objecten meghívjuk a get metódust aminek az első bemeneti argumentuma a elérési útvonalat adja meg a másik bemeneti argumentuma egy callback függvény
  models.Flat.findAll().then(flats => { //  a models object Flat objectjén meghívjuk a findAll() metódust ami végigiterál a flats tömbön amire meghívunk egy promiset
    res.json(flats); // ami .json formátumban visszaadja az összes elemét a flats-nek.
  });
});

//  show
flats.get('/:id', (req, res) => { //  Flats objecten meghívjuk a get metódust aminek az első bemeneti argumentuma a elérési útvonalat adja meg a másik bemeneti argumentuma egy callback függvény
  models.Flat.findById(req.params.id).then(flat => { // a models object flat objectjén meghívjuk a findById metódust aminek a bemeneti argumentuma a (req.params.id), a paraméterként megadott id alapján lekérdezi az adott elemet amire meghívunk egy promiset
    if (!flat) {
      return res.status(400).send('Nem létezik');
    }
    res.json(flat); // ami .json formátumban adja vissza a flat bizonyos elemét
  });
});

//  create
flats.post('/', (req, res) => { // Flats objecten meghívjuk a get metódust aminek az első bemeneti argumentuma a elérési útvonalat adja meg a másik bemeneti argumentuma egy callback függvény
  models.Flat.create({ // a models object Flat objectjén meghívjuk a create metódust
    title: req.body.title,
    price: req.body.price,
    floorArea: req.body.floorArea,
    country: req.body.country,
    zip: req.body.zip,
    city: req.body.city,
    street: req.body.street
  }).then(flat => {
    res.json(flat);
  });
});

//  update
flats.put('/:id', (req, res) => {
  models.Flat.update(req.body, {
    where: { id: req.params.id }
  }).then(flat => {
    res.json(flat);
  });
});

//  delete
flats.delete('/:id', (req, res) => {
  models.Flat.destroy(req.body, {
    where: { id: req.params.id }
  }).then(flat => {
    res.json(flat);
  });
});

module.exports = flats;
