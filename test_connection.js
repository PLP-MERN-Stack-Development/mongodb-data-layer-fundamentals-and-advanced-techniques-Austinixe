require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

async function run() {
  const client = new MongoClient(uri, {
    tls: true,
    serverSelectionTimeoutMS: 5000,
  });

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas!");

    const db = client.db("plp_bookstore");
    const collections = await db.listCollections().toArray();
    console.log("📂 Collections:", collections.map(c => c.name));
  } catch (err) {
    console.error("❌ Connection error:", err);
  } finally {
    await client.close();
    console.log("🔒 Connection closed");
  }
}

run();
