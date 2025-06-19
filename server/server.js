require('dotenv').config();
const express = require("express");
const cors = require("cors");


// Initialize Express
const app = express();

// Middleware
app.use(cors({
  origin: "https://astha-portfolio-xi.vercel.app", 
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(express.json());

// ✅ Default route (optional, for testing Render deployment)
app.get("/", (req, res) => {
  res.send("Backend is live 🚀");
});

// Routes
app.use("/contact", require("./routers/contactRouter.js"));

// Start Server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
