/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import { CocktailRecipe, ingredient } from "./CocktailRecipe";

export default function RandomCocktail(props: any) {
  const [name, setName] = useState<string>("Gin and Tonic");
  const [glass, setGlass] = useState<string>("Highball");
  const [instructions, setInstructions] = useState<Array<string>>(['step 1', 'step 2']);
  const [ingredients, setIngredients] = useState<Array<ingredient>>([]);

  useEffect(() => {
      const gin = {name: 'gin', amount: '1 oz'}
      const tonic = {name: 'tonic', amount: '2 oz'}
      const lime = {name: 'lime', amount: '1 slice'}
      setIngredients([gin, tonic, lime]);
  }, [setIngredients])

  /*useEffect(() => {
        const options =        {
            method: 'GET',
            url: 'https://the-cocktail-db.p.rapidapi.com/random.php',
            headers: {
              'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
              'x-rapidapi-key': 'INJECT THIS'
            }
          };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    });*/

  return (
    <CocktailRecipe
      name={name}
      glass={glass}
      instructions={instructions}
      ingredients={ingredients}
    />
  );
}
