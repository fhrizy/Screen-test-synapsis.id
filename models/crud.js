const mongoose = require("mongoose");

const CRUDSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
    maxlength: 13,
  },
  address: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.models.crud || mongoose.model("crud", CRUDSchema);
