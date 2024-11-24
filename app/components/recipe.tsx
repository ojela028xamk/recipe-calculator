import { Product, RecipeItem } from "../globalTypes";
import css from "./recipe.module.scss";

type RecipeProps = {
  recipe: RecipeItem[];
  modifyAmount: (itemId: number, amount: number) => void;
  deleteProduct: (itemId: number) => void;
};

const Recipe = ({ recipe, modifyAmount, deleteProduct }: RecipeProps) => {
  return (
    <div className={css.recipe}>
      <table>
        <tbody>
          {recipe.map((item) => (
            <tr key={item.id}>
              <th>{item.name}</th>
              <th>{item.calorie}</th>
              <th>{item.protein}</th>
              <th>{item.amount}</th>
              <th>{item.unit}</th>
              <th>
                <button onClick={() => modifyAmount(item.id, 50)}>
                  Amount
                </button>
                <button onClick={() => deleteProduct(item.id)}>X</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recipe;
