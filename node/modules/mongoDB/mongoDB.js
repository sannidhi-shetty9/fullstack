// const MongoClient = require('mongodb').MongoClient;

// const uri = "mongodb://<username>:<password>@<server>:<port>/<database>";
// mongodb congif file path: /etc/mongod.conf

// mongosh --host <hostname> --port <port>
// db.createUser({user: "admin", pwd: "admin", roles: [{role: "root", db: "admin"}] })
const { MongoClient } = require("mongodb");

// Connection URL
// URL syntax: mongodb://username:password@ip:port
// const url = "mongodb://localhost:27017"; // server details without auth
// const url = "mongodb://admin:admin@localhost:27017"; // server details without auth username:
// const url = "mongodb://admin:admin@192.168.1.6:27017"; 
const url = `mongodb://${"192.168.1.6"}:27017`; 



// Create a new MongoClient
const client = new MongoClient(url, {});

// Function to connect and perform database operations
async function connectAndQuery() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Access a specific database (e.g., "mydb")
    const db = client.db("testdb");

    // Access a specific collection (e.g., "mycollection")
    const collection = db.collection("c1");

    // Perform database operations
    const result = await collection.findOne({ name: "John" });
    console.log(result);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    // Close the connection when done
    client.close();
  }
}

// Call the function to connect and query
connectAndQuery();
