import { Action, ActionType } from "./appContainer";
import { Product } from "./globalTypes";

const recipeReducer = (recipe: Product[], action: Action) => {
  switch (action.type) {
    case ActionType.ADD: {
      return [...recipe, action.newProduct];
    }
    case ActionType.MODIFY: {
      console.log("modify");
    }
    case ActionType.DELETE: {
      console.log("delete");
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default recipeReducer;
