require('dotenv').config();
const express = require("express");
const cors = require("cors");


// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/contact", require("./routers/contactRouter.js"));

// Start Server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
