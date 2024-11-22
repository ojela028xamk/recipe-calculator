"use server";
import { sql } from "@vercel/postgres";

const getProductList = async () => {
  const data = await sql`SELECT * FROM Products`;

  return data.rows;
};

export { getProductList };
