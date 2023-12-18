import mongoose from "mongoose";
const { Schema } = mongoose;

const cafeSchema = new Schema (
  {
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
    }
  });

export const CafeModel = mongoose.model("Cafe", cafeSchema)
