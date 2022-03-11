import React,{useEffect, useState} from "react";
import {createUseStyles} from 'react-jss';

import { CardContainer } from "../Components";
import { getCocktailsFromSearch, getRandomCocktails } from "../utils";

const useStyles = createUseStyles({
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
    let [cocktails, setCocktails] = useState([]);
    let [search, setSearch] = useState('')
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

    let updateCocktail = async function (search) {
        setCocktails(await getCocktailsFromSearch(search))
    }


    return(<div id="home" className="container">
            <h1>Delicius cocktails<br/>for you</h1>
            <p className={`grouped ${classes.groupedInput}`}>
                <input  
                    type="search"
                    name="search_home"
                    id="search_home"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
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
            {(cocktails) ? <CardContainer cocktails={cocktails} /> : 'loading'}
    </div>)
}