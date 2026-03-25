const BaseRepository = require('../../shared/base.repository');
const ProjectType = require('./projectType.model');

class ProjectTypeRepository extends BaseRepository {
  constructor() {
    super(ProjectType);
  }
}

module.exports = new ProjectTypeRepository();