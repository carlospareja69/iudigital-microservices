const projectTypeRepository = require('./projectType.repository');

class ProjectTypeService {

  async createProjectType(data) {
    return await projectTypeRepository.create(data);
  }

  async getAllProjectTypes() {
    return await projectTypeRepository.findAll();
  }

  async updateProjectType(id, data) {
    const type = await projectTypeRepository.findById(id);

    if (!type) {
      throw new Error('Tipo de proyecto no encontrado');
    }

    return await projectTypeRepository.update(id, data);
  }

}

module.exports = new ProjectTypeService();