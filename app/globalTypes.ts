export type Product = {
  id: number;
  name: string;
  calorie: number;
  protein: number;
  unit: Unit;
};

export enum Unit {
  G = "g",
  ML = "ml",
}
