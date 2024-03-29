const mongoose = require("mongoose");

const cafeSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: false,
  },
  hours: {
    type: String,
    required: true,
  },
  menu: {
    type: String,
    required: false,
  },
  photos: {
    type: Array,
    required: false,
  },
  tags: {
    type: Array,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
  free_wifi: {
    type: String,
    required: false,
  },
  coffee_refill_included: {
    type: String,
    required: false,
  }
});

const CafeModel = mongoose.model("Cafe", cafeSchema, "cafeList");
module.exports = CafeModel;
