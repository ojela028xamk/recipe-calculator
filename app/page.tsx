"use client";
import AppContainer from "./appContainer";
import css from "./page.module.scss";

export default function Home() {
  return (
    <div className={css.page}>
      <AppContainer />
    </div>
  );
}
