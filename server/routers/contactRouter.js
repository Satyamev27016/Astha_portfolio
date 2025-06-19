const express = require("express");
const router = express.Router();
const { submitContact } = require("../controllers/contactController");

router.post("/", submitContact);

console.log(req.body);

module.exports = router;
