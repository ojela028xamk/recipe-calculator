export type Product = {
  id: number;
  name: string;
  calorie: number;
  protein: string; // DECIMAL
  unit: Unit;
};

export interface RecipeItem extends Product {
  amount: number;
}

export enum Unit {
  G = "g",
  ML = "ml",
}

export enum ActionType {
  ADD = "add",
  MODIFY = "modify",
  DELETE = "delete",
}

type ActionAddProduct = {
  type: ActionType.ADD;
  recipeItem: RecipeItem;
};

type ActionModifyAmount = {
  type: ActionType.MODIFY;
  id: number;
  amount: number;
};

type ActionDeleteProduct = {
  type: ActionType.DELETE;
  id: number;
};

export type Action =
  | ActionAddProduct
  | ActionModifyAmount
  | ActionDeleteProduct;
