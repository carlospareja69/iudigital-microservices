const stageService = require('./stage.service');

class StageController {

  async create(req, res) {
    try {
      const stage = await stageService.createStage(req.body);
      return res.status(201).json(stage);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const stages = await stageService.getAllStages();
      return res.json(stages);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const stage = await stageService.updateStage(req.params.id, req.body);
      return res.json(stage);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

}

module.exports = new StageController();