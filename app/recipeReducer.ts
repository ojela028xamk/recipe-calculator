import { Action, ActionType, Product } from "./globalTypes";

const recipeReducer = (recipe: Product[], action: Action) => {
  switch (action.type) {
    case ActionType.ADD: {
      return [...recipe, action.newProduct];
    }
    case ActionType.MODIFY: {
      console.log("Implement modify");
      return [];
    }
    case ActionType.DELETE: {
      return recipe.filter((product) => product.id !== action.id);
    }
    default: {
      throw Error("Unknown action");
    }
  }
};

export default recipeReducer;
