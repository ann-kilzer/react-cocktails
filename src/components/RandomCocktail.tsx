/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import { CocktailRecipe, ingredient } from "./CocktailRecipe";

export default function RandomCocktail(props: any) {
  const [name, setName] = useState<string>("");
  const [glass, setGlass] = useState<string>("");
  const [instructions, setInstructions] = useState<string>("");
  const [ingredients, setIngredients] = useState<Array<ingredient>>([]);
  const MAX_STEPS = 15;

  useEffect(() => {
    const options: AxiosRequestConfig = {
      method: 'GET',
      url: 'https://the-cocktail-db.p.rapidapi.com/random.php',
      headers: {
        'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST || '',
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY || ''
      }
    };

    axios.request(options).then(function (response) {
      const drink = response.data.drinks[0];
      console.log(drink);
      setName(drink.strDrink);
      setGlass(drink.strGlass);
      setInstructions(drink.strInstructions);

      let ingredients = Array<ingredient>();
      let i:number = 1
      for(i=1; i<=MAX_STEPS; i++) {
        const item = drink[`strIngredient${i}`]
        const measure = drink[`strMeasure${i}`]
        if (item || measure) {
          ingredients.push({name: item || '', amount: measure || ''})
        } else {
          break;
        }
      }
      setIngredients(ingredients);

    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  return (
    <CocktailRecipe
      name={name}
      glass={glass}
      instructions={instructions}
      ingredients={ingredients}
    />
  );
}
