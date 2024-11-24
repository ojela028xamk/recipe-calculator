import { Action, ActionType, RecipeItem } from "./globalTypes";

const recipeReducer = (recipe: RecipeItem[], action: Action) => {
  switch (action.type) {
    case ActionType.ADD: {
      const newRecipe = [...recipe, action.recipeItem];
      return newRecipe;
    }
    case ActionType.MODIFY: {
      const newRecipe = recipe.map((item) => {
        if (item.id === action.id) {
          const newItem = { ...item, amount: action.amount };
          return newItem;
        } else {
          return item;
        }
      });
      return newRecipe;
    }
    case ActionType.DELETE: {
      const newRecipe = recipe.filter((item) => item.id !== action.id);
      return newRecipe;
    }
    default: {
      throw Error("Unknown action");
    }
  }
};

export default recipeReducer;
