// find_books.js - Script to query MongoDB books collection

require('dotenv').config();
const { MongoClient } = require('mongodb');

// Get connection string from .env
const uri = process.env.MONGODB_URI;
const dbName = 'plp_bookstore';
const collectionName = 'books';

async function findBooks() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('✅ Connected to MongoDB Atlas');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // 1. Find all books
    console.log('\n📚 All books:');
    const allBooks = await collection.find({}).toArray();
    allBooks.forEach(b => console.log(`- ${b.title} by ${b.author} (${b.published_year})`));

    // 2. Find books by George Orwell
    console.log('\n📖 Books by George Orwell:');
    const orwellBooks = await collection.find({ author: "George Orwell" }).toArray();
    orwellBooks.forEach(b => console.log(`- ${b.title} (${b.published_year})`));

    // 3. Find books published after 1950
    console.log('\n📖 Books published after 1950:');
    const modernBooks = await collection.find({ published_year: { $gt: 1950 } }).toArray();
    modernBooks.forEach(b => console.log(`- ${b.title} (${b.published_year})`));

    // 4. Find only in-stock books
    console.log('\n📦 In-stock books:');
    const inStockBooks = await collection.find({ in_stock: true }).toArray();
    inStockBooks.forEach(b => console.log(`- ${b.title} (${b.published_year})`));

  } catch (err) {
    console.error('❌ Error:', err);
  } finally {
    await client.close();
    console.log('\n🔒 Connection closed');
  }
}

findBooks().catch(console.error);
