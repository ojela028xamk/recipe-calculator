import { Product } from "../globalTypes";
import css from "./recipe.module.scss";

type RecipeProps = {
  recipe: Product[];
  deleteProduct: (productId: number) => void;
};

const Recipe = ({ recipe, deleteProduct }: RecipeProps) => {
  return (
    <div className={css.recipe}>
      <table>
        <tbody>
          {recipe.map((product) => (
            <tr key={product.id}>
              <th>{product.name}</th>
              <th>{product.calorie}</th>
              <th>{product.protein}</th>
              <th>{product.unit}</th>
              <th>
                <button onClick={() => deleteProduct(product.id)}>
                  Delete -
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recipe;
