import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getCocktailById } from "../utils";

export default function Cocktail(props) {
    let {idDrink} = useParams();
    let [cocktailJson, setCocktail] = useState()

    useEffect(() => {
        let promise1 = new Promise((resolve, reject) => {
            resolve(getCocktailById(idDrink))
          });
          
          promise1.then((value) => {
            setCocktail(value)
            // expected output: "Success!"
          });

    },[])

    return(<>
        {(cocktailJson) ? `Cocktail id: ${cocktailJson.strDrink}` : 'loading'}
    </>)
}