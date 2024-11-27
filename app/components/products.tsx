import { useState } from "react";
import { useEffectOnce } from "react-use";
import { Product, RecipeItem } from "../globalTypes";
import { getProducts } from "../services/databaseService";
import css from "./products.module.scss";
import tablecss from "./table.module.scss";

type ProductsProps = {
  addProduct: (product: Product) => void;
  recipe: RecipeItem[];
};

const Products = ({ addProduct, recipe }: ProductsProps) => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffectOnce(() => {
    getProducts()
      .then((res) => setProductList(res as Product[]))
      .catch((err) => console.log(err));
  });

  return (
    <div className={css.products}>
      <table className={tablecss.table}>
        <thead>
          <tr>
            <th colSpan={5}>Food product per 100 g/ml</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Calories</th>
            <th>Protein</th>
            <th>Unit</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => {
            const recipeHasItem = recipe.some((item) => product.id === item.id);

            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.calorie}</td>
                <td>{product.protein}</td>
                <td>{product.unit}</td>
                <td>
                  {!recipeHasItem && (
                    <button onClick={() => addProduct(product)}>+</button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
