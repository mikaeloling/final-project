import { cafeModel } from "../models/CafeModel";
//asyncHandler: We use asyncHandler to simplify error handling in asynchronous code. It helps us avoid writing repetitive try-catch blocks by automatically catching errors and passing them to our error handling middleware. This makes our code cleaner and more readable, reducing the risk of unhandled exceptions that could crash the server.
import asyncHandler from "express-async-handler";
// We need to import the userModel to check for the famous accesstoken
import { UserModel } from "../models/UserModel";

// desciption: Get cafes
// route: /get
// access: Private
export const getCafesController = asyncHandler(async (req, res) => {
  // get the user and matchIt with the user from the db - remmeber that we are using the accessToken to do so :)
  const userStorage = req.user;
  // Use the cafeModel to find all cafes associated with the logged-in user
  await cafeModel.find({ user: userStorage })
    .sort("-createdAt")
    .then((result) => res.json(result)) // Respond with the found cafes in JSON format
    .catch((err) => res.json(err)); // Handle any errors that occur during the operation
});

// desciption: POST cafes
// route: /add
// access: Private
export const addCafeController = asyncHandler(async (req, res) => {
  try {
    // Extract the cafe data from the request body
    const { cafe } = req.body;
    // Extract the accessToken from the request object, but it is not going to be from the req.body but, its going to be from the req.header
    const accessToken = req.header("Authorization"); // we are requesting the Authorization key from the headerObject
    // get the user and matchIt with the user from the db - remmeber that we are using the accessToken to do so :)
    const userFromStorage = await UserModel.findOne({
      accessToken: accessToken,
    });
    // Define var to pass new cafe
    const newCafe = new cafeModel({
      cafe: cafe,
      user: userFromStorage,
    }).save();
    res.json(newCafe);
  } catch (error) {
    res.status(500).json(error);
  }
});

// desciption: PUT/PATCH a specific cafe to mark it complete
// route: /update/:id"
// access: Private
export const updateCafeController = asyncHandler(async (req, res) => {
  // Extract the cafe ID from the request parameters
  const { id } = req.params;
  console.log(id); // Log the ID to the console
  // Use cafeModel to find and update a cafe by its ID, marking it as done
  // Use cafeModel to delete all cafes in the database
  // Extract the accessToken from the request object, but it is not going to be from the req.body but, its going to be from the req.header
  const accessToken = req.header("Authorization"); // we are requesting the Authorization key from the headerObject
  // get the user and matchIt with the user from the db - remmeber that we are using the accessToken to do so :)
  const userFromStorage = await UserModel.findOne({
    accessToken: accessToken,
  });
  await cafeModel.findByIdAndUpdate(
    { _id: id },
    { done: true },
    { user: userFromStorage }
  )
    .then((result) => res.json(result)) // Respond with the updated cafe in JSON format
    .catch((err) => res.json(err)); // Handle any errors that occur during the operation
});

// desciption: DELETE all cafes
// route: /deleteAll
// access: Private
export const deleteAllcafesController = asyncHandler(async (req, res) => {
  // Use cafeModel to delete all cafes in the database
  // Extract the accessToken from the request object, but it is not going to be from the req.body but, its going to be from the req.header
  const accessToken = req.header("Authorization"); // we are requesting the Authorization key from the headerObject
  // get the user and matchIt with the user from the db - remmeber that we are using the accessToken to do so :)
  const userFromStorage = await UserModel.findOne({
    accessToken: accessToken,
  });
  await cafeModel.deleteMany({ user: userFromStorage })
    .then((result) =>
      res.json({
        message: "All cafes deleted",
        deletedCount: result.deletedCount,
      })
    ) // Respond with a success message and the count of deleted cafes
    .catch((err) => res.status(500).json(err)); // Handle any errors that occur during the operation
});

// desciption: DELETE cafe by its ID
// route: /delete/:id
// access: Private
export const deleteSpecificcafeController = asyncHandler(async (req, res) => {
  // Extract the cafe ID from the request parameters
  const { id } = req.params;
  // Use cafeModel to find and delete a cafe by its ID
  await cafeModel.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.json({
          message: "cafe deleted successfully",
          deletedcafe: result,
        }); // Respond with a success message and the deleted cafe
      } else {
        res.status(404).json({ message: "cafe not found" }); // Respond with a 404 error if the cafe is not found
      }
    })
    .catch((err) => res.status(500).json(err)); // Handle any errors that occur during the operation
});

// IN SUMMARY

//This file defines several controllers for handling cafes in an Express.js application. Here's a summary of what the file does in simple words:

// getcafesController: This controller is responsible for fetching cafes associated with a logged-in user. It uses the cafeModel to retrieve cafes from the database, sorts them by creation date, and responds with the list of cafes in JSON format. Access to this route is restricted to authenticated users.

// addcafeController: This controller handles the addition of new cafes. It extracts the cafe data from the request body and the user's authentication token from the request header. It then associates the cafe with the authenticated user and saves it to the database. The newly created cafe is sent back as a JSON response. This route is also accessible only to authenticated users.

// updatecafeController: This controller is responsible for marking a specific cafe as completed. It extracts the cafe ID from the request parameters, logs it to the console, and updates the cafe status to "done" in the database. It then responds with the updated cafe in JSON format. Access to this route is restricted to authenticated users.

// deleteAllcafesController: This controller is used to delete all cafes associated with the authenticated user. It retrieves the user's authentication token from the request header, finds the user in the database, and deletes all cafes associated with that user. It responds with a JSON message indicating the number of deleted cafes. This route can only be accessed by authenticated users.

// deleteSpecificcafeController: Here, the controller is responsible for deleting a specific cafe by its ID. It extracts the cafe ID from the request parameters and uses the cafeModel to find and delete the cafe. If the cafe is found and deleted, it responds with a success message and the deleted cafe. If the cafe is not found, it responds with a 404 error message. Authentication is required to access this route.

// In summary, this file contains controllers for handling cafes within a web application. These controllers ensure that cafes can be retrieved, added, updated, and deleted while enforcing authentication and error handling to maintain the application's integrity and security.
