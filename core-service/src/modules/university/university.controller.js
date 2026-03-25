const universityService = require('./university.service');

class UniversityController {

  async create(req, res) {
    try {
      const university = await universityService.createUniversity(req.body);
      return res.status(201).json(university);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const universities = await universityService.getAllUniversities();
      return res.json(universities);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const university = await universityService.updateUniversity(req.params.id, req.body);
      return res.json(university);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

}

module.exports = new UniversityController();