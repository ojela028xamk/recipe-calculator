"use client";
import { useReducer } from "react";
import css from "./AppContainer.module.scss";
import Products from "./components/products";
import Recipe from "./components/recipe";
import recipeReducer from "./recipeReducer";
import { ActionType, Product, RecipeItem } from "./globalTypes";

const initialRecipe: RecipeItem[] = [];

const AppContainer = () => {
  const [recipe, dispatch] = useReducer(recipeReducer, initialRecipe);

  const handleAddProduct = (product: Product) => {
    const newRecipeItem: RecipeItem = { ...product, amount: 100 };
    dispatch({
      type: ActionType.ADD,
      recipeItem: newRecipeItem,
    });
  };

  const handleModifyAmount = (itemId: number, amount: number) => {
    dispatch({
      type: ActionType.MODIFY,
      id: itemId,
      amount: amount,
    });
  };

  const handleDeleteProduct = (itemId: number) => {
    dispatch({
      type: ActionType.DELETE,
      id: itemId,
    });
  };

  return (
    <div className={css.app_container}>
      <Products addProduct={handleAddProduct} recipe={recipe} />
      <Recipe
        recipe={recipe}
        modifyAmount={handleModifyAmount}
        deleteProduct={handleDeleteProduct}
      />
    </div>
  );
};

export default AppContainer;
