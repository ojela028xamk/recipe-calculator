import { useState } from "react";
import css from "./products.module.scss";
import { useEffectOnce } from "react-use";
import { Product } from "../globalTypes";
import { getProducts } from "../services/databaseService";

const Products = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffectOnce(() => {
    getProducts()
      .then((res) => setProductList(res as Product[]))
      .catch((err) => console.log(err));
  });

  return (
    <div className={css.products}>
      <table>
        <tbody>
          {productList.map((product) => (
            <tr key={product.id}>
              <th>{product.name}</th>
              <th>{product.calorie}</th>
              <th>{product.protein}</th>
              <th>{product.unit}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
