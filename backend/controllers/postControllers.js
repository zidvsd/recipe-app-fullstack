import recipes from "../public/constants/recipesData.js";

// get all recipe
// @route GET /api/recipes
export const getRecipes = (req, res, next) => {
  const limit = parseInt(req.query.limit);

  if (req.query.limit !== undefined && isNaN(limit)) {
    return res
      .status(400)
      .json({ message: `Invalid limit: ${req.query.limit}` });
  }

  if (limit <= 0) {
    return res.status(400).json({ message: `Limit must be a positive number` });
  }

  res.status(200).json(limit ? recipes.slice(0, limit) : recipes);
};

// get single recipe
// @route GET /api/recipes/:id
export const getRecipe = (req, res, next) => {
  const id = parseInt(req.params.id);
  const recipe = recipes.find((recipe) => recipe.id === id);

  if (!recipe) return res.status("404").json({ message: "Recipe not found" });
  res.status(200).json(recipe);
};

// post a recipe
// @route POST /api/recipes
export const addRecipe = (req, res, next) => {
  const newRecipe = {
    id: recipes.length + 1,
    title: req.body.title,
    ingredients: req.body.ingredients || [],
    instructions: req.body.instructions || [],
  };
  if (
    !newRecipe.title ||
    !Array.isArray(newRecipe.ingredients) ||
    !Array.isArray(newRecipe.instructions)
  ) {
    const err = new Error("Please include a title");
    err.status = 400;
    return next(err);
  }
  recipes.push(newRecipe);
  res.status(201).json({ message: "Recipe added succesfully" });
};
