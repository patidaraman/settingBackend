require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passwordRouter = require("./Routes/WifiPasswordRoutes");
const hotspotRouter = require("./Routes/HotspotRoutes");
const wifiRouter = require("./Routes/WifiRoutes");
const bluetoothRouter = require("./Routes/BluetoothRoutes");
const mobiledataRouter = require("./Routes/MobileDataRoutes");
const brightnessRouter = require("./Routes/BrightnessRoutes");
const router = require("./Routes/D&BRoutes");
const airplaneRouter = require("./Routes/AirplaneModeRoute");
const shRouter = require("./Routes/SoundRoutes");

const server = express();
const port = process.env.PORT || 8000;

server.use(cors());
server.use(bodyParser.json());
server.use(express.json());

server.use("/password", passwordRouter);
server.use("/hotspot", hotspotRouter);
server.use("/wifi", wifiRouter);
server.use("/bluetooth", bluetoothRouter);
server.use("/mobiledata", mobiledataRouter);
server.use("/automatic", router);
server.use("/raisetowake", router);
server.use("/", brightnessRouter);
server.use("/boldtext", router);
server.use("/scheduled", router);
server.use("/manually", router);
server.use("/airplanemode", airplaneRouter);
server.use('/vibratering', shRouter);
server.use('/vibratesilent', shRouter);
server.use('/changebutton', shRouter);
server.use('/keyboard', shRouter);
server.use('/locksound', shRouter);
server.use('/system', shRouter);
server.use('/autolock', router);
server.use('/dataroaming', mobiledataRouter);
server.use('/lowdata', mobiledataRouter);
server.use('/IP', mobiledataRouter);
server.use('/textsize', router);
server.use('/autojoin', wifiRouter);
server.use('/network', mobiledataRouter);
server.use('/volte', mobiledataRouter);
server.use('/calling', mobiledataRouter);
server.use('/other', mobiledataRouter);
server.use('/mac', mobiledataRouter);
server.use('/sim', mobiledataRouter);


// Root route handler
server.get("/", (req, res) => {
  res.send("Welcome to the Settings App API");
});


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    server.listen(port, () => {
        console.log(`Server Started on port no ${port}`);
    });
})
.catch((error) => {
    console.log(error);
});
