const express = require("express");
const logs = require("../data/logs.json");
const personnel = require("../data/personnel.json");
const messages = require("../data/messages.json");
const codes = require("../data/codes.json");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    title: "Welcome",
    message:
      "Our spaceship needs to leave Earth... pronto. The only problem is that we can't figure out the launch codes for the ship - can you help us? Use the fetch protocol you learned at the academy to navigate through the map. Check the manual in the readme for more information.",
    map: ["/logs", "/personnel", "/messages", "/hint", "/codes"],
  });
});

router.get("/logs", function (req, res, next) {
  res.json(logs);
});

router.get("/personnel", function (req, res, next) {
  res.json({
    WARNING: "Stop being greedy. Search for individual personnel only!",
  });
});

router.get("/personnel/:id", function (req, res, next) {
  const { id } = req.params;
  console.log({ id });
  res.json(personnel.find((p) => p.id === Number(id)));
});

router.get("/messages", function (req, res, next) {
  const { to } = req.query;
  if (to) {
    console.log(to);
    res.json(messages.find((p) => p.to === Number(to)));
  }
  res.json({
    WARNING:
      "You can't view them all. Naughty naughty! Search for messages using the id of the recipient.",
  });
});

router.get("/hint", function (req, res, next) {
  res.json({
    length: 5,
    type: "string",
    rules: "It's so important, you have to make it UPPER CASE!",
  });
});

router.post("/codes", function (req, res, next) {
  if (req.body.enter === codes.enter) {
    return res.json({
      success: true,
      img: "https://media.giphy.com/media/W69xBwRM9fhh30eyMw/giphy.gif",
      message:
        "Maybe now you have time to catch-up with the gossip and read all of the other messages...",
    });
  }
  res.json({
    success: false,
    img: "https://media.giphy.com/media/mq5y2jHRCAqMo/giphy.gif",
  });
});

module.exports = router;
