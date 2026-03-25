const projectTypeService = require('./projectType.service');

class ProjectTypeController {

  async create(req, res) {
    try {
      const type = await projectTypeService.createProjectType(req.body);
      return res.status(201).json(type);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const types = await projectTypeService.getAllProjectTypes();
      return res.json(types);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const type = await projectTypeService.updateProjectType(req.params.id, req.body);
      return res.json(type);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

}

module.exports = new ProjectTypeController();