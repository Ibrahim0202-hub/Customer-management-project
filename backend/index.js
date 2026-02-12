const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres123",
  port: 5432,
});

pool.connect()
  .then(() => console.log("✅ Database connected successfully"))
  .catch(err => console.error("❌ DB error", err));


// ✅ GET all customers
app.get("/api/customer", async (req, res) => {
  const result = await pool.query("SELECT * FROM customer ORDER BY id DESC");
  res.json(result.rows);
});


// ✅ ADD new customer
app.post("/api/customer", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  await pool.query(
    "INSERT INTO customer (name, email, message) VALUES ($1, $2, $3)",
    [name, email, message]
  );

  res.json({ success: true });
});


// ✅ DELETE customer by ID  (⬅️ ADDED THIS PART ONLY)
app.delete("/api/customer/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM customer WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Customer not found" });
    }

    res.json({ message: "Customer deleted successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


app.listen(5000, () => {
  console.log("🚀 Backend running on port 5000");
});
