const projectService = require('./project.service');

class ProjectController {

  async create(req, res) {
    try {
      const project = await projectService.createProject(req.body);
      return res.status(201).json(project);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const projects = await projectService.getAllProjects();
      return res.json(projects);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const project = await projectService.updateProject(req.params.id, req.body);
      return res.json(project);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

}

module.exports = new ProjectController();