const express = require('express');
const router = express.Router();
const universityController = require('./university.controller');

router.post('/', (req, res) => universityController.create(req, res));
router.get('/', (req, res) => universityController.findAll(req, res));
router.put('/:id', (req, res) => universityController.update(req, res));

module.exports = router;