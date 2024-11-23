"use client";
import css from "./AppContainer.module.scss";
import Products from "./components/products";
import Recipe from "./components/recipe";

const AppContainer = () => {
  return (
    <div className={css.app_container}>
      <Products />
      <Recipe />
    </div>
  );
};

export default AppContainer;
