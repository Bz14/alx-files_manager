/**
 * Database connection
 */

import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    this.host = process.env.DB_HOST || 'localhost';
    this.port = process.env.DB_PORT || 27017;
    this.database = process.env.DB_DATABASE || 'files_manager';
    this.client = new MongoClient(`mongodb://${this.host}:${this.port}`, {
      useUnifiedTopology: true,
    });
  }

  isAlive() {
    return this.client.isConnected();
  }

  async nbUsers() {
    return this.client.db(this.database).collection('users').countDocuments();
  }

  async nbFiles() {
    return this.client.db(this.database).collection('files').countDocuments();
  }
}

const dbClient = new DBClient();

export default dbClient;
