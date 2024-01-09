const express = require("express");
const router = express.Router();
var user = require("../data/user.json");

router.post("/login", (req, res) => {
  let { email, password } = req.body;

  if (email === "" && password === "") {
    return res.json({
      success: false,
      message: "Please fill-up email and password field",
    });
  } else {
    if (email === "") {
      return res.json({
        success: false,
        message: "Please fill-up email field",
      });
    }
    if (password === "") {
      return res.json({
        success: false,
        message: "Please fill-up password field",
      });
    }

    return res.json({
      success: true,
      message: "Login successful",
    });
  }
});

router.post("/create/employee", (req, res) => {
  let { name, email, number, password } = req.body;

  if (email === "" && password === "" && name === "" && number === "") {
    return res.json({
      success: false,
      message: "Please fill-up email,name,number password field",
    });
  } else {
    let message = "";
    if (email === "") {
      message += "Please fill-up email field ";
    } else if (password === "") {
      message += "Please fill-up password field ";
    } else if (number === "") {
      message += "Please fill-up number field ";
    } else if (name === "") {
      message += "Please fill-up name field ";
    }
    if (message === "") {
      return res.json({
        success: true,
        message: "Register successful",
      });
    } else {
      return res.json({
        success: false,
        message: message,
      });
    }
  }
});

router.post("/register", (req, res) => {
  let { name, email, number, password } = req.body;

  if (email === "" && password === "" && name === "" && number === "") {
    return res.json({
      success: false,
      message: "Please fill-up email,name,number password field",
    });
  } else {
    let message = "";
    if (email === "") {
      message += "Please fill-up email field ";
    } else if (password === "") {
      message += "Please fill-up password field ";
    } else if (number === "") {
      message += "Please fill-up number field ";
    } else if (name === "") {
      message += "Please fill-up name field ";
    }
    if (message === "") {
      return res.json({
        success: true,
        message: "Register successful",
      });
    } else {
      return res.json({
        success: false,
        message: message,
      });
    }
  }
});
module.exports = router;
