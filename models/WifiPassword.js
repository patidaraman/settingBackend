const mongoose = require('mongoose');

const PasswordSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  },
}, { collection: 'WiFiPasswords' });

const WiFiPassword = mongoose.model('WiFiPassword', PasswordSchema);
module.exports = WiFiPassword;
