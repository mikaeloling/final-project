import { CafeModel } from '../models/CafeModel';
import asyncHandler from "express-async-handler";
import UserModel from "../models/UserModel";



export const getCafesController = async (req, res) => {
  try {
    const cafes = await CafeModel.find();
    res.json(cafes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const addCafeController = asyncHandler(async (req, res) => {
    const {
    name,
    address,
    city,
    zip,
    country,
    website,
    hours,
    menu,
    photos,
    tags,
  } = req.body;
  
  const accessToken = req.header("Authorization"); 
  const userFromStorage = await UserModel.findOne({
    accessToken: accessToken,
  });

  const newCafe = await cafeModel.create({
    name,
    address,
    city,
    zip,
    country,
    website,
    hours,
    menu,
    photos,
    tags,
    user: userFromStorage,
  });
  res.json(newCafe);
});

export const getSpecificCafeController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await cafeModel.findById(id)
    .then((result) => {
      if (result) {
        res.json(result); 
      }
      else {
        res.status(404).json({ message: "cafe not found" }); 
      }
    })
    .catch((err) => res.status(500).json(err)); 
});


export const updateCafeController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id); 
  
  const accessToken = req.header("Authorization"); 
  const userFromStorage = await UserModel.findOne({
    accessToken: accessToken,
  });
  await cafeModel.findByIdAndUpdate(
    { _id: id },
    { done: true },
    { user: userFromStorage }
  )
    .then((result) => res.json(result)) 
    .catch((err) => res.json(err)); 
});


export const deleteAllcafesController = asyncHandler(async (req, res) => {
  const accessToken = req.header("Authorization"); 
  const userFromStorage = await UserModel.findOne({
    accessToken: accessToken,
  });
  await cafeModel.deleteMany({ user: userFromStorage })
    .then((result) =>
      res.json({
        message: "All cafes deleted",
        deletedCount: result.deletedCount,
      })
    ) 
    .catch((err) => res.status(500).json(err));
});

export const deleteCafeController = asyncHandler(async (req, res) => {
  
  const { id } = req.params;
  await cafeModel.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.json(result); 
      }
      else {
        res.status(404).json({ message: "cafe not found" }); 
      }
    })
    .catch((err) => res.status(500).json(err)); 
});


