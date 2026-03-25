const BaseRepository = require('../../shared/base.repository');
const Client = require('./client.model');

class ClientRepository extends BaseRepository {
  constructor() {
    super(Client);
  }
}

module.exports = new ClientRepository();