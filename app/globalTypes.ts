export type Product = {
  id: number;
  name: string;
  calorie: number;
  protein: string; // DECIMAL
  unit: Unit;
};

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
  newProduct: Product;
};

type ActionModifyAmount = {
  type: ActionType.MODIFY;
};

type ActionDeleteProduct = {
  type: ActionType.DELETE;
  id: number;
};

export type Action =
  | ActionAddProduct
  | ActionModifyAmount
  | ActionDeleteProduct;
