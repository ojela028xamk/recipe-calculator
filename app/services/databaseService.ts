"use server";
import { sql } from "@vercel/postgres";

const getProducts = async () => {
  const data = await sql`SELECT * FROM Products`;

  return data.rows;
};

export { getProducts };
