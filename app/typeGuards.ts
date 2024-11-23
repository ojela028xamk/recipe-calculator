import { Product, Unit } from "./globalTypes";

const isValidProductsData = (dataArr: Product[]): dataArr is Product[] => {
  const isArray = Array.isArray(dataArr);

  if (!isArray) return false;

  const hasValidObjects = dataArr.every(isValidProductsDataObject);

  if (!hasValidObjects) return false;

  return true;
};

const isValidProductsDataObject = (dataObj: Product): dataObj is Product => {
  const hasCorrectKeys =
    "id" in dataObj &&
    "name" in dataObj &&
    "calorie" in dataObj &&
    "protein" in dataObj &&
    "unit" in dataObj;

  if (!hasCorrectKeys) return false;

  const correctUnit = Object.values(Unit).includes(dataObj.unit);

  if (
    typeof dataObj.id !== "number" ||
    typeof dataObj.name !== "string" ||
    typeof dataObj.calorie !== "number" ||
    typeof dataObj.protein !== "string" ||
    !correctUnit
  ) {
    return false;
  }

  return true;
};

export { isValidProductsData };
