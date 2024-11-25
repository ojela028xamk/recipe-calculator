import { RecipeItem } from "../globalTypes";
import css from "./recipe.module.scss";
import { useState } from "react";

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
                {currentItemId !== item.id && (
                  <button
                    onClick={() => handleNewAmountChange(item.id, item.amount)}
                  >
                    Change amount
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
              </th>
              <th>
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
