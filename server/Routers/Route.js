const express = require("express");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    res.status(501).json({
      msg: "not registered",
      error: error
    });
  }
});

module.exports = router;
