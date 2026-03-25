const universityRepository = require('./university.repository');

class UniversityService {

  async createUniversity(data) {
    return await universityRepository.create(data);
  }

  async getAllUniversities() {
    return await universityRepository.findAll();
  }

  async updateUniversity(id, data) {
    const university = await universityRepository.findById(id);

    if (!university) {
      throw new Error('Universidad no encontrada');
    }

    return await universityRepository.update(id, data);
  }

}

module.exports = new UniversityService();