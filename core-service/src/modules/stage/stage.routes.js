const express = require('express');
const router = express.Router();
const stageController = require('./stage.controller');

router.post('/', (req, res) => stageController.create(req, res));
router.get('/', (req, res) => stageController.findAll(req, res));
router.put('/:id', (req, res) => stageController.update(req, res));

module.exports = router;