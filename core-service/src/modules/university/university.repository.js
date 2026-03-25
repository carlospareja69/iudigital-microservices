const BaseRepository = require('../../shared/base.repository');
const University = require('./university.model');

class UniversityRepository extends BaseRepository {
  constructor() {
    super(University);
  }
}

module.exports = new UniversityRepository();