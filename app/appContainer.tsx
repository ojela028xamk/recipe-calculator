"use client";
import { useReducer } from "react";
import css from "./AppContainer.module.scss";
import Products from "./components/products";
import Recipe from "./components/recipe";
import recipeReducer from "./recipeReducer";
import { ActionType, Product } from "./globalTypes";

const initialRecipe: Product[] = [];

const AppContainer = () => {
  const [recipe, dispatch] = useReducer(recipeReducer, initialRecipe);

  const handleAddProduct = (product: Product) => {
    dispatch({
      type: ActionType.ADD,
      newProduct: product,
    });
  };

  const handleDeleteProduct = (productId: number) => {
    dispatch({
      type: ActionType.DELETE,
      id: productId,
    });
  };

  return (
    <div className={css.app_container}>
      <Products addProduct={handleAddProduct} />
      <Recipe recipe={recipe} deleteProduct={handleDeleteProduct} />
    </div>
  );
};

export default AppContainer;
