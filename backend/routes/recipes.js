import express from "express";
import {
  getRecipes,
  getRecipe,
  addRecipe,
} from "../controllers/postControllers.js";
const router = express.Router();

// get all recipe with optional limit
router.get("/", getRecipes);

// get single recipe
router.get("/:id", getRecipe);

// create new recipe
router.post("/", addRecipe);
// update recipe

// delete recipe
export default router;
