const express = require("express");
var fs = require("fs");
const router = express.Router();
const path = require("path");
var reports = require("../data/report1.json");
router.get("/report", (req, res) => {
  return res.json({
    success: true,
    data: reports,
  });
});

router.get("/manage/report", async (req, res) => {
  var report = require("../data/report.json");

  return res.json({
    success: true,
    data: report,
  });
});

router.post("/report", (req, res) => {
  let report = req.body;
  console.log(reports);
  report.geometry = JSON.parse(report.geometry);
  if (reports.indexOf((i) => i.id === report.id) === -1) {
    reports.push(report);

    fs.writeFileSync(
      path.join(path.resolve(__dirname), "../data/report1.json"),
      JSON.stringify(reports),
      function (err) {}
    );

    return res.status({ success: true });
  }
  return res.status({ success: false });
});

module.exports = router;
