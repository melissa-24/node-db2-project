const express = require('express');

const db = require('../data/db-config.js');

const router = express.Router();

// all has /api/cars in front


// Get Requests
router.get('/', (req, res) => {
  db.select('*')
  .from('cars')
  .then( cars => res.status(200).json({data: cars}))
  .catch((err) => console.log(err));
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  db('cars')
  .where('id', id)
  .first()
  .then((cars) => res.status(200).json({data: cars}))
  .catch((err) => console.log(err));
});


// Post requests
router.post('/', (req, res) => {
  const carsData = req.body;
  db('cars')
  .insert(carsData)
  .then( id => res.status(201).json({data: id}))
  .catch((err) => console.log(err));
});


// Update requests
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const update = req.body;
    db('cars')
    .where('id', id)
    .update(update)
    .then( id => {
        if (id > 0) {
            res.status(200).json({message: "was updated"});
        } else {
            res.status(404).json({message: "ID does not exist"});
        }  
    })
    .catch((err) => console.log(err)); 
});


// Delete requests
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    db('cars')
    .where("id", id)
    .delete()
    .then(count => {
        if (count > 0) {
            res.status(200).json({message: "Record deleted"});
        } else {
            res.status(404).json({message: "That is not a valid id. Can not delete"});
        }
    })
    .catch((err) => console.log(err));
});

module.exports = router;