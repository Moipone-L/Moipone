const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Replace with your MySQL username
  password: "", // Replace with your MySQL password
  database: "inventory_db", // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database.");
});

// Endpoint to handle user registration
app.post("/register", (req, res) => {
  const { username, password, role } = req.body;

  // Validation
  if (!username || !password || !role) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  // Insert user into the database
  const sql = "INSERT INTO users (username, password, role) VALUES (?, ?, ?)";
  db.query(sql, [username, password, role], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ message: "Failed to register user." });
    }
    res.status(201).json({ message: "User registered successfully!" });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
