const projectRepository = require('./project.repository');

class ProjectService {

  async createProject(data) {
    return await projectRepository.create(data);
  }

  async getAllProjects() {
    return await projectRepository.findAllWithRelations();
  }

  async updateProject(id, data) {
    const existingProject = await projectRepository.findById(id);

    if (!existingProject) {
      throw new Error('Proyecto no encontrado');
    }

    return await projectRepository.update(id, data);
  }

}

module.exports = new ProjectService();