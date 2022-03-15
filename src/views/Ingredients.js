import React, {useEffect, useState} from "react";
import { ButtonContainer, LoadingSpinner, CardContainer } from "../Components"
import { getIngredientsList, getCocktailsFromSearch } from "../utils";
import { useParams } from "react-router-dom";
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        marginTop: '3rem'
    },
  })

export default function Ingredients() {

    const [ingredientList, setIngredientList] = useState();
    const [cocktailList, setCocktailsList] = useState();

    let {nameIngredient} = useParams();
    const classes = useStyles();
    
    let clearPage = () => {
        setIngredientList(undefined)
        setCocktailsList(undefined)
    }

    // Everytime the params change, if isn't undefined search items with that params else list all ingredients
    useEffect(() => {
        clearPage()
        let promise1 = new Promise((resolve, reject) => {
            resolve(getIngredientsList())
          });
        
        let promise2 = new Promise((resolve, reject) => {
            resolve(getCocktailsFromSearch(nameIngredient))
        });

        (nameIngredient === undefined) ?
            promise1.then((value) => {
                setIngredientList(value)
                // expected output: "Success!"
            }) 
            : 
            promise2.then((value) => {
                setCocktailsList(value)
                // expected output: "Success!"  
            }) 

    },[nameIngredient])

    

    return(<div id="ingredients" className={`container ${classes.wrapper}`}>
        <h1>Find cocktail from<br/>alcholic 🍸</h1>
        {
            (ingredientList) ? 
                <ButtonContainer ingredientsList={ingredientList}/> 
                : 
                (cocktailList) ? 
                    <CardContainer cocktails={cocktailList}/> 
                    : 
                    <LoadingSpinner />

        }
    </div>)
}