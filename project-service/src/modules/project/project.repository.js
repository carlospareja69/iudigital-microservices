const BaseRepository = require('../../shared/base.repository');
const Project = require('./project.model');

class ProjectRepository extends BaseRepository {
  constructor() {
    super(Project);
  }

  async findAllWithRelations() {
    return await this.model.find(); 
  }
}

module.exports = new ProjectRepository();