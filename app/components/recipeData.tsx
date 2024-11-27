"use client";
import { useEffect, useState } from "react";
import { RecipeItem } from "../globalTypes";
import css from "./recipeData.module.scss";

type RecipeDataProps = {
  recipe: RecipeItem[];
};

type RecipeAmountData = {
  calories: number;
  protein: number;
};

const RecipeData = ({ recipe }: RecipeDataProps) => {
  const [recipeData, setRecipeData] = useState<RecipeAmountData>({
    calories: 0,
    protein: 0,
  });

  useEffect(() => {
    let newRecipeData: RecipeAmountData = { calories: 0, protein: 0 };

    recipe.map((item) => {
      const newCalorie = (item.calorie / 100) * item.amount;
      const newProtein = (Number(item.protein) / 100) * item.amount;

      const totalCalorie = newRecipeData.calories + newCalorie;
      const totalProtein = newRecipeData.protein + newProtein;

      newRecipeData = {
        calories: Number(totalCalorie.toFixed(2)),
        protein: Number(totalProtein.toFixed(2)),
      };
    });

    setRecipeData(newRecipeData);
  }, [recipe]);

  return (
    <div className={css.recipe_data}>
      <h1>Calories: {recipeData.calories} kcal</h1>
      <h1>Protein: {recipeData.protein} g</h1>
    </div>
  );
};

export default RecipeData;
