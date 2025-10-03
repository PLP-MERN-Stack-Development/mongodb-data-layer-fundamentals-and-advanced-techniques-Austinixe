// queries.js - MongoDB Queries for PLP Assignment
require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const dbName = "plp_bookstore";
const collectionName = "books";

async function runQueries() {
  const client = new MongoClient(uri, { tls: true });

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas\n");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // -----------------------
    // Task 2: Basic CRUD
    // -----------------------
    console.log("📌 Task 2: Basic CRUD Operations\n");

    // 1. Find all books in a specific genre
    console.log("Books in Fiction genre:");
    console.log(await collection.find({ genre: "Fiction" }).toArray());

    // 2. Find books published after a certain year
    console.log("Books published after 1950:");
    console.log(await collection.find({ published_year: { $gt: 1950 } }).toArray());

    // 3. Find books by a specific author
    console.log("Books by George Orwell:");
    console.log(await collection.find({ author: "George Orwell" }).toArray());

    // 4. Update the price of a specific book
    await collection.updateOne({ title: "1984" }, { $set: { price: 15.99 } });
    console.log("✅ Updated price of '1984'");

    // 5. Delete a book by its title
    await collection.deleteOne({ title: "Moby Dick" });
    console.log("🗑️ Deleted 'Moby Dick'\n");

    // -----------------------
    // Task 3: Advanced Queries
    // -----------------------
    console.log("📌 Task 3: Advanced Queries\n");

    // 1. Find books in stock AND published after 2010
    console.log("Books in stock and published after 2010:");
    console.log(await collection.find({ in_stock: true, published_year: { $gt: 2010 } }).toArray());

    // 2. Projection (only title, author, price)
    console.log("Projection (title, author, price):");
    console.log(await collection.find({}, { projection: { title: 1, author: 1, price: 1 } }).toArray());

    // 3. Sorting by price ascending
    console.log("Books sorted by price (asc):");
    console.log(await collection.find().sort({ price: 1 }).toArray());

    // 4. Sorting by price descending
    console.log("Books sorted by price (desc):");
    console.log(await collection.find().sort({ price: -1 }).toArray());

    // 5. Pagination (limit & skip)
    console.log("Page 1 (first 5 books):");
    console.log(await collection.find().limit(5).toArray());
    console.log("Page 2 (next 5 books):");
    console.log(await collection.find().skip(5).limit(5).toArray());

    // -----------------------
    // Task 4: Aggregation
    // -----------------------
    console.log("📌 Task 4: Aggregation Pipelines\n");

    // 1. Average price of books by genre
    console.log("Average price by genre:");
    console.log(await collection.aggregate([
      { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
    ]).toArray());

    // 2. Author with most books
    console.log("Author with most books:");
    console.log(await collection.aggregate([
      { $group: { _id: "$author", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 }
    ]).toArray());

    // 3. Group books by decade
    console.log("Books grouped by decade:");
    console.log(await collection.aggregate([
      { $project: { decade: { $subtract: ["$published_year", { $mod: ["$published_year", 10] }] } } },
      { $group: { _id: "$decade", count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ]).toArray());

    // -----------------------
    // Task 5: Indexing
    // -----------------------
    console.log("📌 Task 5: Indexing\n");

    // 1. Create index on title
    await collection.createIndex({ title: 1 });
    console.log("✅ Index created on 'title'");

    // 2. Compound index on author + published_year
    await collection.createIndex({ author: 1, published_year: 1 });
    console.log("✅ Compound index created (author, published_year)");

    // 3. Explain query performance
    console.log("Explain query (author = 'George Orwell'):");
    console.log(await collection.find({ author: "George Orwell" }).explain("executionStats"));

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
    console.log("\n🔒 Connection closed");
  }
}

runQueries();
