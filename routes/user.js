const express = require("express");
const router = express.Router();

router.get("/edit-profile", (req, res) => {
  res.send("profile");
});

router.get("/photo", (req, res) => {
  res.send("photo");
});

module.exports = router;
