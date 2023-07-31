// db.js
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connectToDatabase = async () => {
  try {
    await client.connect();
  } catch (error) {
    if (error.message === 'Not connected') {
      await client.connect();
    } else {
      throw error;
    }
  }
  return client.db();
};

module.exports = connectToDatabase;
