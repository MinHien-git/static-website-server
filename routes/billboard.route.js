const express = require("express");
const router = express.Router();

router.get("/billboard", async (req, res) => {
  var billboard = require("../data/billboard.json");
  var reports = require("../data/report1.json");

  return res.json({
    success: true,
    data: { billboard, reports },
  });
});

router.get("/manage/billboard", async (req, res) => {
  var billboard = require("../data/billboard.json");

  return res.json({
    success: true,
    data: billboard,
  });
});

module.exports = router;
