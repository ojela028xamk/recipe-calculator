"use client";
import { useReducer } from "react";
import css from "./AppContainer.module.scss";
import Products from "./components/products";
import Recipe from "./components/recipe";
import recipeReducer from "./recipeReducer";
import { Product } from "./globalTypes";

const initialRecipe: Product[] = [];

export enum ActionType {
  ADD = "add",
  MODIFY = "modify",
  DELETE = "delete",
}

type ActionAddProduct = {
  type: ActionType.ADD;
  newProduct: Product;
};

type ActionModifyAmount = {
  type: ActionType.MODIFY;
};

type ActionDeleteProduct = {
  type: ActionType.DELETE;
};

export type Action =
  | ActionAddProduct
  | ActionModifyAmount
  | ActionDeleteProduct;

const AppContainer = () => {
  const [recipe, dispatch] = useReducer(recipeReducer, initialRecipe);

  console.log(recipe);

  const handleAddProduct = (product: Product) => {
    dispatch({
      type: ActionType.ADD,
      newProduct: product,
    });
  };

  return (
    <div className={css.app_container}>
      <Products addProduct={handleAddProduct} />
      <Recipe />
    </div>
  );
};

export default AppContainer;
