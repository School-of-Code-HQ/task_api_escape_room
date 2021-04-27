const express = require("express");
const logs = require("../data/logs.json");
const personnel = require("../data/personnel.json");
const messages = require("../data/messages.json");
const codes = require("../data/codes.json");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    title: "welcome",
    message:
      "Spaceship needs to leave Earth... pronto. Only problem is, we can't figure out the launch codes for the ship - can you help us?",
    map: ["/logs", "/personnel", "/messages", "/hint", "/codes"]
  });
});

router.get("/logs", function (req, res, next) {
  res.json(logs);
});

router.get("/personnel/:id", function (req, res, next) {
  const { id } = req.params;
  res.json(personnel.find((p) => p.id === id));
});

router.get("/messages", function (req, res, next) {
  const { to } = req.query;
  res.json(messages.find((p) => p.to === to));
});

router.get("/hint", function (req, res, next) {
  res.json({
    length: 6,
    type: "number",
    rules: "Cannot start with a 0"
  });
});

router.post("/codes", function (req, res, next) {
  if (req.body.enter === codes.enter) {
    return res.json({
      success: true,
      img: "https://media.giphy.com/media/W69xBwRM9fhh30eyMw/giphy.gif"
    });
  }
  res.json({
    success: false,
    img: "https://media.giphy.com/media/mq5y2jHRCAqMo/giphy.gif"
  });
});

module.exports = router;
