// import api routes and express router
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");
const path = require("path");

// Book Routes
router.use("/books", bookRoutes);

// Google Routes
router.use("/google", googleRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

// export routes
module.exports = router;