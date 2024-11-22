"use client";
import css from "./page.module.scss";
import { getProductList } from "./services/databaseService";
import { useEffectOnce } from "react-use";

export default function Home() {
  useEffectOnce(() => {
    getProductList()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });

  return <div className={css.page}></div>;
}
