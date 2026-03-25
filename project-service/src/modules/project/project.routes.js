const express = require('express');
const router = express.Router();
const projectController = require('./project.controller');

router.post('/', (req, res) => projectController.create(req, res));
router.get('/', (req, res) => projectController.findAll(req, res));
router.put('/:id', (req, res) => projectController.update(req, res));

module.exports = router;