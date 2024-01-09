const express = require("express");
const app = express();
const cors = require("cors");
const billboard = require("./routes/billboard.route");
const report = require("./routes/report.route");
const authentication = require("./routes/authentication.route");
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({
    extended: true,
    parameterLimit: 100000,
    limit: "50mb",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/html"));
app.use(cors({ origin: true }));
app.options("*", cors());

app.use(billboard);
app.use(report);
app.use(authentication);

app.listen(8080, function () {
  console.log("Listen to port ", 8080);
});
