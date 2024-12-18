import { RecipeItem } from "../globalTypes";
import { useState } from "react";
import css from "./recipe.module.scss";
import tablecss from "./table.module.scss";

type RecipeProps = {
  recipe: RecipeItem[];
  modifyAmount: (itemId: number, amount: number) => void;
  deleteProduct: (itemId: number) => void;
};

const Recipe = ({ recipe, modifyAmount, deleteProduct }: RecipeProps) => {
  const [currentItemId, setCurrentItemId] = useState<number | null>(null);
  const [newAmount, setNewAmount] = useState<number>(0);

  const handleNewAmountChange = (itemId: number, currentAmount: number) => {
    setCurrentItemId(itemId);
    setNewAmount(currentAmount);
  };

  const handleSaveAmountChange = () => {
    if (!currentItemId) return;

    modifyAmount(currentItemId, newAmount);
    setCurrentItemId(null);
  };

  return (
    <div className={css.recipe}>
      <table className={tablecss.table}>
        <thead>
          <tr>
            <th colSpan={7}>Recipe</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Calories</th>
            <th>Protein</th>
            <th>Amount</th>
            <th>Unit</th>
            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody>
          {recipe.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.calorie}</td>
              <td>{item.protein}</td>
              <td>{item.amount}</td>
              <td>{item.unit}</td>
              <td>
                {currentItemId !== item.id && (
                  <button
                    onClick={() => handleNewAmountChange(item.id, item.amount)}
                  >
                    Change
                  </button>
                )}
                {currentItemId === item.id && (
                  <>
                    <input
                      type="number"
                      value={newAmount}
                      onChange={(event) =>
                        setNewAmount(Number(event.currentTarget.value))
                      }
                    />
                    <button onClick={() => handleSaveAmountChange()}>
                      Save
                    </button>
                  </>
                )}
              </td>
              <td>
                <button onClick={() => deleteProduct(item.id)}>x</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recipe;
