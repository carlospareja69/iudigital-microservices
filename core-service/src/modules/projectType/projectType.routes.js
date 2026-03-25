const express = require('express');
const router = express.Router();
const projectTypeController = require('./projectType.controller');

router.post('/', (req, res) => projectTypeController.create(req, res));
router.get('/', (req, res) => projectTypeController.findAll(req, res));
router.put('/:id', (req, res) => projectTypeController.update(req, res));

module.exports = router;