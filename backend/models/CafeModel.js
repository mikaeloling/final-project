import mongoose from "mongoose";
import { urlencoded } from "express";

// Import the Schema class from the Mongoose library
// Destructures the Schema class from the Mongoose library, allowing us to create a schema.
const { Schema } = mongoose;

// Create a new Mongoose schema named 'cafeSchema'
// Creates a new Mongoose schema named cafeSchema that defines the structure of a document in the MongoDB collection. It includes fields like cafeName, cafeAddress, cafeCity, cafeZip, cafeWebsite, cafeHours, cafeMenu, cafeReviews, and cafePhotos. Each field has a data type and other properties that define how the data should be stored in the database.
export const cafeSchema = new Schema(
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
    website: {
      type: String,
      required: false,
    },
    hours: {
      type: String,
      required: true,
    },
    menu: {
      type: urlencoded,
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

    
  },
  {

  
    timestamps: true
  }
);

export const CafeModel = mongoose.model("Cafe", cafeSchema);

// Create a Mongoose model named 'TaskModel' based on the 'taskSchema' for the 'tasks' collection
// This model is used to interact with the "tasks" collection in the MongoDB database. It allows you to perform CRUD operations on documents in that collection and provides methods for data validation based on the schema.
// export const CafeModel = mongoose.model("Cafe", cafeSchema);

// In summary, this code defines a Mongoose schema (taskSchema) that describes the structure of documents for tasks in a MongoDB collection. It also creates a Mongoose model (TaskModel) associated with the "tasks" collection, which can be used to interact with the database and perform operations like creating, reading, updating, and deleting tasks.
