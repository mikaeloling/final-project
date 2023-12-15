// Import the necessary modules and functions
import express from "express";
import { authenticateUser } from "../middleware/authenticateUser"; // Import middleware for user authentication
import {
  getCafeController,
  updateCafeController,
  deleteAllCafeController,
  deleteSpecificCafeController,
  addCafeController,
} from "../controllers/cafes"; // Import controller functions for cafe

// Create an instance of the Express router
const router = express.Router();

// Define a route for handling GET requests to retrieve all cafe
router.get("/get", authenticateUser, getCafeController); // When a GET request is made to /get, authenticate the user using middleware and then execute the getcafeController function

// Define a route for handling PUT requests to update a specific task by ID
router.put("/update/:id", updateCafeController); // When a PUT request is made to /update/:id, execute the updateTaskController function

// Define a route for handling DELETE requests to delete all cafe
router.delete("/deleteAll", deleteAllCafeController); // When a DELETE request is made to /deleteAll, execute the deleteAllcafeController function

// Define a route for handling DELETE requests to delete a specific task by ID
router.delete("/delete/:id", deleteSpecificCafeController); // When a DELETE request is made to /delete/:id, execute the deleteSpecificTaskController function

// Define a route for handling POST requests to add a new task
router.post("/add", authenticateUser, addCafeController); // When a POST request is made to /add, authenticate the user using middleware and then execute the addTaskController function

// Export the router for use in the main application
export default router;

// In summary, this file sets up routes using the Express router for various CRUD operations on cafe. It includes middleware for user authentication and associates each route with the corresponding controller function. These routes define the API endpoints for managing cafe within the application.
