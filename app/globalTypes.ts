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
