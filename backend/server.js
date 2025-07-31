import express from "express";
import dotenv from "dotenv";
import recipes from "./routes/recipes.js";
import errorHandler from "./middleware/error.js";
dotenv.config();
const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("home page");
});

const port = process.env.PORT || 8000;

// routes
app.use("/api/recipes", recipes);
app.use(errorHandler);
app.listen(port, () => console.log(`Server running in port:${port}`));
