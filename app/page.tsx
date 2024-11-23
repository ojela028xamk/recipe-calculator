"use client";
import { useState } from "react";
import css from "./page.module.scss";
import { getProducts } from "./services/databaseService";
import { useEffectOnce } from "react-use";
import { Product } from "./globalTypes";

export default function Home() {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffectOnce(() => {
    getProducts()
      .then((res) => setProductList(res as Product[]))
      .catch((err) => console.log(err));
  });

  return (
    <div className={css.page}>
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
}
