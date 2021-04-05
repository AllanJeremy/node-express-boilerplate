const express = require("express");
const router = express.Router();

// Routes
const UserRoutes = require("./routes/user");
//... Add more routes here

//* Official route setup
router.use("/user", UserRoutes);
//... Add more route mappings here

module.exports = router;
