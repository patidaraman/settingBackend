const express = require("express");
const airplaneRouter = express.Router();
const AirplaneModeModle =  require('../models/AirplaneMode.js')


airplaneRouter.get("/", async (req, res) => {
  try {
    const existingRecord = await AirplaneModeModle.findOne();
    if (existingRecord) {
      res.json({ isAirplaneModeOn: existingRecord.isAirplaneModeOn });
    } else {
      res.status(404).json({ error: "Airplane Mode state not found" });
    }
  } catch (error) {
    console.error('Error fetching Mobile data  setting:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



airplaneRouter.post("/", async (req, res) => {
  try {
    const { isAirplaneModeOn } = req.body;

    // Find the existing record, or create one if it doesn't exist
    let existingRecord = await AirplaneModeModel.findOne();
    if (!existingRecord) {
      existingRecord = new AirplaneModeModel();
    }

    // Update the isAirplaneModeOn state
    existingRecord.isAirplaneModeOn = isAirplaneModeOn;

    await existingRecord.save();
    res.json(existingRecord);
  } catch (error) {
    console.error('Error updating Airplane Mode setting:', error);
    res.status(500).json({ error: 'Failed to update Airplane Mode setting' });
  }
});


airplaneRouter.get("/", async (req, res) => {
  try {
    const existingRecord = await AirplaneModeModle.findOne();
    if (existingRecord) {
      res.json({ isAirplaneModeOn: existingRecord.isAirplaneModeOn });
    } else {
      res.status(404).json({ error: "Airplane Mode state not found" });
    }
  } catch (error) {
    console.error('Error fetching Airplane Mode setting:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});






module.exports = airplaneRouter;
