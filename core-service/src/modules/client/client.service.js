const clientRepository = require('./client.repository');

class ClientService {
  
  async createClient(data) {
    return await clientRepository.create(data);
  }

  async getAllClients() {
    return await clientRepository.findAll();
  }

  async updateClient(id, data) {
    const existingClient = await clientRepository.findById(id);

    if (!existingClient) {
      throw new Error('Cliente no encontrado');
    }

    return await clientRepository.update(id, data);
  }

}

module.exports = new ClientService();