const stageRepository = require('./stage.repository');

class StageService {

  async createStage(data) {
    return await stageRepository.create(data);
  }

  async getAllStages() {
    return await stageRepository.findAll();
  }

  async updateStage(id, data) {
    const stage = await stageRepository.findById(id);

    if (!stage) {
      throw new Error('Etapa no encontrada');
    }

    return await stageRepository.update(id, data);
  }

}

module.exports = new StageService();