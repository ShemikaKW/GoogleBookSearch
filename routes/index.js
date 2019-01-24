// import express Router, path module (built into node), our api routes
const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/bulid/index.html"))
);

module.exports = router;