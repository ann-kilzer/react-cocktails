export interface ingredient {
  name: string;
  amount: string;
}

interface recipeProps {
  name: string;
  glass: string;
  instructions: string;
  ingredients: Array<ingredient>;
}

export const CocktailRecipe: React.FC<recipeProps> = ({
  name,
  glass,
  instructions,
  ingredients,
}) => {
  const ingredientTable = ingredients.map((item) =>
    <tr key={item.name}>
      <td>{item.amount}</td>
      <td>{item.name}</td>
    </tr>
  );

  return (
    <div>
      <h1>{name}</h1>
      <h2>Glass: {glass}</h2>
      <h3>Ingredients</h3>
      <table><tbody>{ingredientTable}</tbody></table>
      <h3>Instructions</h3>
      <span>{instructions}</span>
    </div>
  );
};
