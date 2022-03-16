import React,{useEffect, useState} from "react";
import {createUseStyles} from 'react-jss';

import { CardContainer, LoadingSpinner } from "../Components";
import { getCocktailsFromSearch, getRandomCocktails, getCocktailByIngredient } from "../utils";
//Data
// import {ingredientsList} from '../data';

const useStyles = createUseStyles({
    wrapper: {
        marginTop: '3rem'
    },
    groupedInput: {
        height: '7rem'
    },
    searchInput: {
        borderRadius: '1rem 0 0 1rem !important',
        margin: '0 !important'
    },
    searchButton: {
        borderRadius: '0 1rem 1rem 0',
        width: '7rem',
        background: '#ff4b1f'
    }

  })


export default function Home(props) {
    let [cocktails, setCocktails] = useState();
    let [search, setSearch] = useState(String)
    const classes = useStyles();

    useEffect(() => {
        let promise1 = new Promise((resolve, reject) => {
            resolve(getRandomCocktails())
          });
          
          promise1.then((value) => {
            setCocktails(value)
            // expected output: "Success!"
          });

    },[])
    //From the value of the searchbar find cocktails by name and ingredients, concat without duplicates and render
    let updateCocktail = async function (search) {
        let fromSearch = await getCocktailsFromSearch(search)
        let fromIngredient = await getCocktailByIngredient(search)
        let cocktailsFromSearch = fromSearch.concat(fromIngredient);
        if (fromIngredient === undefined) {
            cocktailsFromSearch = fromSearch
        } else {
            cocktailsFromSearch = [...new Set([...fromSearch,...fromIngredient])]
        }
        setCocktails(cocktailsFromSearch)
    }


    return(<div id="home" className={`container ${classes.wrapper}`}>
            <h1>Delicius cocktails<br/>for you</h1>
            <p className={`grouped ${classes.groupedInput}`}>
                <input  
                    type="search"
                    name="search_home"
                    id="search_home"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)
                        updateCocktail(search)
                    }}
                    className={classes.searchInput}
                />
                <button 
                    className={`button icon-only `+ classes.searchButton}
                    onClick={e => updateCocktail(search)}
                >
                    <img 
                        src="https://icongr.am/feather/search.svg?size=128&color=ffffff" 
                        alt="search"
                    />
                </button>
            </p>
            {(cocktails) ? <CardContainer cocktails={cocktails} /> : <LoadingSpinner />}
    </div>)
}