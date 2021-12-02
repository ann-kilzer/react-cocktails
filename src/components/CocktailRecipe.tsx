export interface ingredient {
  name: string;
  amount: string;
}

interface recipeProps {
  name: string;
  glass: string;
  instructions: Array<string>;
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
      <td>{item.name}</td>
      <td>{item.amount}</td>
    </tr>
  );

  const instructionList = instructions.map((item) => 
    <li>{item}</li>
  );


  return (
    <div>
      <h1>{name}</h1>
      <h2>Glass: {glass}</h2>
      <h3>Ingredients</h3>
      <table>{ingredientTable}</table>
      <h3>Instructions</h3>
      <ol>{instructionList}</ol>
    </div>
  );
};
