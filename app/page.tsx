"use client";
import { useState } from "react";
import css from "./page.module.scss";
import { getProducts } from "./services/databaseService";
import { useEffectOnce } from "react-use";

export default function Home() {
  const [productList, setProductList] = useState<any[]>([]);

  useEffectOnce(() => {
    getProducts()
      .then((res) => setProductList(res))
      .catch((err) => console.log(err));
  });

  return (
    <div className={css.page}>
      <>
        {productList.map((item: any) => (
          <h3 key={item.id}>{item.name}</h3>
        ))}
      </>
    </div>
  );
}
