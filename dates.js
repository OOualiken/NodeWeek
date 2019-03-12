const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

(async function() {
  // Connection URL
  const url = 'mongodb://localhost:27017/test';
  // Database Name
  const dbName = 'testProject';
  const client = new MongoClient(url);

  try {
    // Use connect method to connect to the Server
    await client.connect();
    console.log("Ça maaarche");

    const db = client.db(dbName);
    const col = db.collection('date');

    //Add date
    const date = await col.insertOne({date:new Date()})

    // Get the collection
    const docs = await col.find().toArray();
    console.log(docs);

  } catch (err) {
    console.log(err.stack);
  }

  client.close();
})();