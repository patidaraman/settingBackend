const express = require("express");
const router = express.Router();
const User = require("../models/WifiPassword");

// Update or create Wi-Fi password
router.post("/", async (req, res) => {
  try {
    const { password } = req.body;

    // Find the existing password document, or create one if it doesn't exist
    let existingPasswordDocument = await User.findOne();
    if (!existingPasswordDocument) {
      existingPasswordDocument = new User();
    }

    // Update the password
    existingPasswordDocument.password = password;

    await existingPasswordDocument.save();

    res.json(existingPasswordDocument);
  } catch (error) {
    console.error('Error updating Wi-Fi password:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get the Wi-Fi password
router.get("/", async (req, res) => {
  try {
    const existingPasswordDocument = await User.findOne();
    if (!existingPasswordDocument) {
      return res.status(404).json({ error: "Wi-Fi password not found" });
    }
    res.json(existingPasswordDocument);
  } catch (error) {
    console.error("Error fetching Wi-Fi password:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;



// const express = require("express");
// const passwordRouter = express.Router();
// const user = require('../models/WifiPassword')


// passwordRouter.post("/", async (req, res) => {
//   try {
//     const { password } = req.body;

//     // Find the existing password document, or create one if it doesn't exist
//     let existingPasswordDocument = await user.findOne();
//     if (!existingPasswordDocument) {
//       existingPasswordDocument = new user();
//     }

//     // Update the password
//     existingPasswordDocument.password = password;

//     await existingPasswordDocument.save();

//     res.json(existingPasswordDocument);
//   } catch (error) {
//     console.error('Error updating Wi-Fi password:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Get the Wi-Fi password
// passwordRouter.get("/password", async (req, res) => {
//   try {
//     const existingPasswordDocument = await user.findOne();
//     res.json(existingPasswordDocument);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching Wi-Fi password" });
//   }
// });

// module.exports = passwordRouter;

