const express = require('express');
const router = express.Router();
const clientController = require('./client.controller');

router.post('/', (req, res) => clientController.create(req, res));
router.get('/', (req, res) => clientController.findAll(req, res));
router.put('/:id', (req, res) => clientController.update(req, res));

module.exports = router;