"use server";
import { sql } from "@vercel/postgres";
import { isValidProductsData } from "../typeGuards";
import { Product } from "../globalTypes";

const getProducts = async () => {
  const data = await sql`SELECT * FROM Products`;

  const isValidData = isValidProductsData(data.rows as Product[]);

  if (isValidData) {
    return data.rows;
  } else {
    throw Error;
  }
};

export { getProducts };
