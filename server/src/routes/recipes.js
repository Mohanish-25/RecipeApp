import express from "express";
import { Mongoose } from "mongoose";
import { RecipesModel } from "../models/Recipes.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();


router.get("/", async (req, res) => {
    try {
        const response = await RecipesModel.find({});
        res.json(response);
    } catch (error) {
        res.json(error);
    }
});

router.post("/", async (req, res) => {
    const recipe = new  RecipesModel(req.body);
    try {
        const response = await recipe.save();
        res.json(response);
    } catch (error) {
        res.json(error);
    }
});

router.put("/", async (req, res) => {

    try {
        const recipe = await RecipesModel.findById(req.body.recipeId);
        const user = await UserModel.findById(req.body.userId);
        user.savedRecipes.push(recipe);
        await user.save();
        res.json({savedRecipes: user.savedRecipes});
    } catch (error) {
        res.json(error);
    }
});

router.get("/savedRecipes/ids", async (req, res) => {
    try {
        const user = await UserModel.findById(req.body.userId);
        res.json({savedRecipes: user?.savedRecipes}); 
    } catch (error) {
        
    }
});  

router.get("/savedRecipes", async (req, res) => {
    try {
        const user = await UserModel.findById(req.body.userId);
        const savedRecipes = await RecipesModel.find({_id: {$in: user?.savedRecipes},});
        res.json({savedRecipes}); 
    } catch (error) {
        
    }
});  



export { router as recipesRouter };
