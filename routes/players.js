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

router.get("/:id", async (req, res, next) => {
  try {
    const player = await Player.find({ID: req.params.id});
    res.json({ payload: { player } });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error finding player in database", error: err });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newPlayer = new Player(req.body);
    await newPlayer.save();
    res.status(201).json({ message: "player successfully created", payload: { newPlayer } });
  } catch (err) {
    res.status(500).json({ message: "Error creating player", error: err });
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const updatePlayer = await Player.findOneAndUpdate({ID: req.params.id}, {$set: req.body}, {upsert: true});
    res.status(201).json({ message: "player successfully updated", payload: { updatePlayer } });
  } catch (err) {
    res.status(500).json({ message: "Error updating player", error: err });
  }
})

router.delete("/:id", async (req, res, next) => {
  try {
    const deletePlayer = await Player.findOneAndDelete({ID: req.params.id});
    res.status(201).json({ message: "player successfully deleted", payload: { deletePlayer } });
  } catch (err) {
    res.status(500).json({ message: "Error deleting player", error: err }); 
  }
})

module.exports = router;
