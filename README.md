# 📚 PLP Bookstore – MongoDB Assignment

## 🚀 Overview

This project demonstrates the fundamentals and advanced techniques of working with MongoDB using **Node.js**.
It covers:

* Database setup (MongoDB Atlas)
* CRUD operations
* Advanced queries (projection, sorting, pagination)
* Aggregation pipelines
* Indexing with performance analysis

The project uses a sample **`books`** collection representing a bookstore database.

---

## 🛠️ Setup Instructions

### 1. Clone Repository

```bash
git clone <your-github-classroom-repo-url>
cd <repo-folder>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root of your project and add your MongoDB connection string:

```
MONGODB_URI=mongodb+srv://lexxley59_db_user:MZU1jN6rWGlUFfvl@cluster0.gu0ldrf.mongodb.net/plp_bookstore?retryWrites=true&w=majority


### 4. Populate the Database

Run the script to insert sample data:

```bash
node insert_books.js
```

You should see confirmation that **12 books** were inserted.

---

## 📂 Files

* **`insert_books.js`** → Script to connect to MongoDB and insert sample book documents.
* **`queries.js`** → Contains all CRUD, advanced queries, aggregations, and indexing examples.
* **`README.md`** → Documentation and instructions.
* **Screenshot.png** → Compass/Atlas screenshot of the `books` collection.

---

## ✅ Tasks Completed

### Task 1: MongoDB Setup

* Created **`plp_bookstore`** database
* Created **`books`** collection

### Task 2: Basic CRUD Operations

* Inserted sample books
* Queries to:

  * Find by genre
  * Find published after year
  * Find by author
  * Update book price
  * Delete by title

### Task 3: Advanced Queries

* Find books in stock and published after 2010
* Projection (title, author, price only)
* Sorting by price (ascending & descending)
* Pagination (5 books per page)

### Task 4: Aggregation Pipelines

* Average price by genre
* Author with most books
* Group by publication decade

### Task 5: Indexing

* Created index on `title`
* Created compound index on `(author, published_year)`
* Verified using `explain()`

---

## 🖼️ Screenshot

![Books Collection Screenshot](./images/Screenshot_books.png)
---


🛠️ Setup Instructions
1. Clone Repository
git clone <your-github-classroom-repo-url>
cd <repo-folder>

2. Install Dependencies
npm install

3. Configure Environment Variables

Create a .env file in the root of your project and add your MongoDB connection string:

MONGODB_URI=mongodb+srv://lexxley59_db_user:MZU1jN6rWGlUFfvl@cluster0.gu0ldrf.mongodb.net/plp_bookstore?retryWrites=true&w=majority



4. Populate the Database

Run the script to insert sample data:

node insert_books.js


You should see confirmation that 12 books were inserted.

📂 Files
insert_books.js → Script to connect to MongoDB and insert sample book documents.
queries.js → Contains all CRUD, advanced queries, aggregations, and indexing examples.
README.md → Documentation and instructions.
Screenshot.png → Compass/Atlas screenshot of the books collection.
✅ Tasks Completed
Task 1: MongoDB Setup
Created plp_bookstore database
Created books collection
Task 2: Basic CRUD Operations
Inserted sample books
Queries to:
Find by genre
Find published after year
Find by author
Update book price
Delete by title
Task 3: Advanced Queries
Find books in stock and published after 2010
Projection (title, author, price only)
Sorting by price (ascending & descending)
Pagination (5 books per page)
Task 4: Aggregation Pipelines
Average price by genre
Author with most books
Group by publication decade
Task 5: Indexing
Created index on title
Created compound index on (author, published_year)
Verified using explain()


## 👨‍💻 Author

Assignment completed by Augustine Omokaro Salami for the **MongoDB – Data Layer Fundamentals and Advanced Techniques** course.
