const express = require("express");
const Player = require("../models/players");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const players = await Player.find({});
    res.json({ payload: { players } });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error finding players in database", error: err });
  }
});

// router.post("/", async (req, res, next) => {
//   try {
//     const energiser = new Energiser(req.body);
//     await energiser.save();
//     res.status(201).json({ payload: { energiser } });
//   } catch (err) {
//     res.status(500).json({ message: "Error creating energiser", error: err });
//   }
// });

module.exports = router;
