const BaseRepository = require('../../shared/base.repository');
const Stage = require('./stage.model');

class StageRepository extends BaseRepository {
  constructor() {
    super(Stage);
  }
}

module.exports = new StageRepository();