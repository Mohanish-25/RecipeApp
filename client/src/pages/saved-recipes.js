import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  }, []);
  return (

    <div className="flex flex-wrap justify-center p-4">
      <h1 className="w-full text-center text-2xl mb-6">Saved Recipes</h1>
      {savedRecipes.map((recipe) => (
        <div key={recipe._id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
          <div className="w-full h-64 overflow-hidden">
            <img className="w-full h-full object-cover" src={recipe.imageUrl} alt={recipe.name} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{recipe.name}</div>
            <p className="text-gray-700 text-base"><b>Description: </b>{recipe.description}</p>
            <p className="text-gray-700 text-base"><b>Ingredients: </b>{recipe.ingredients.join(', ')}</p>
            <p className="text-gray-700 text-base"><b>Instructions: </b>{recipe.instructions}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
