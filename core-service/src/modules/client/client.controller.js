const clientService = require('./client.service');

class ClientController {

  async create(req, res) {
    try {
      const client = await clientService.createClient(req.body);
      return res.status(201).json(client);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const clients = await clientService.getAllClients();
      return res.json(clients);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const client = await clientService.updateClient(req.params.id, req.body);
      return res.json(client);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

}

module.exports = new ClientController();