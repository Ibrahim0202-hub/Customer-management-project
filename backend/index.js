const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

/* ================= DATABASE CONNECTION ================= */

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres123",
  port: 5432,
});

pool.connect()
  .then(() => console.log("✅ Database connected successfully"))
  .catch((err) => console.error("❌ DB error", err));

/* ================= GET ALL CUSTOMERS ================= */

app.get("/api/customer", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM customer ORDER BY id DESC"
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch customers" });
  }
});

/* ================= ADD CUSTOMER ================= */

app.post("/api/customer", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await pool.query(
      "INSERT INTO customer (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );

    res.status(201).json({
      message: "Customer saved successfully",
    });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

/* ================= UPDATE CUSTOMER ================= */

app.put("/api/customer/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, message } = req.body;

    await pool.query(
      "UPDATE customer SET name=$1, email=$2, message=$3 WHERE id=$4",
      [name, email, message, id]
    );

    res.json({ message: "Customer updated successfully" });

  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
});

/* ================= DELETE CUSTOMER ================= */

app.delete("/api/customer/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      "DELETE FROM customer WHERE id = $1",
      [id]
    );

    res.json({ message: "Customer deleted successfully" });

  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
});

/* ================= START SERVER ================= */

app.listen(8000, () => {
  console.log("🚀 Backend running on http://localhost:8000");
});
