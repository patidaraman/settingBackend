const mongoose = require("mongoose");

const MobileDataSchema = new mongoose.Schema({
  isMobileDataOn: {
    type: Boolean,
    default: false,
  },

  isDataRoamingOn: {
    type: Boolean,
    default: false,
  },
  isLowDataModeOn: {
    type: Boolean,
    default: false,
  },
  isLimitIPAddressTrackingOn: {
    type: Boolean,
    default: false,
  },
  isNetworkSelectionOn: {
    type: Boolean,
    default: false,
  },
  isVoLTEOn: {
    type: Boolean,
    default: false,
  },
  isCallingWiFiOn: {
    type: Boolean,
    default: false, // Fixed typo here
  },
  isAllowCallsOnOtherDevicesOn: {
    type: Boolean,
    default: false,
  },
  isAllowCallsOnMacBookOn: {
    type: Boolean,
    default: false,
  },
  isSimPinOn: {
    type: Boolean,
    default: false,
  },
  selectedNetwork: {
    type: String,
    default: "", // Added default value for consistency
  },
});

const MobileData = mongoose.model(
  "MobileData",
  MobileDataSchema,
  "Mobile Data"
);
module.exports = MobileData;
