import React,{useEffect, useState} from "react"
import {createUseStyles} from 'react-jss'

import { CardContainer } from "../Components"
import { getCocktailsFromSearch } from "../utils"

const useStyles = createUseStyles({
    searchInput: {
        borderRadius: '1rem 0 0 1rem !important',
        margin: '0 !important'
    },
    searchButton: {
        borderRadius: '0 1rem 1rem 0'
    }

  })

export default function Home(props) {
    let [cocktails, setCocktails] = useState([]);
    let [search, setSearch] = useState('')
    const classes = useStyles();

    useEffect(() => {
        let temp = []
        for (let index = 0; index < 9; index++) {
            temp.push({
                idDrink: '000',
                strDrink: 'Name of Drink',
                strDrinkThumb: 'https://picsum.photos/200/300'
            }) 
        }
        setCocktails(temp)
    },[])

    let updateCocktail = async function (search) {
        
        setCocktails(await getCocktailsFromSearch(search))
    }


    return(<div id="home" className="container">
            <h1>Delicius cocktails<br/>for you</h1>
            <p className="grouped">
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
                        src="https://icongr.am/feather/search.svg?size=16" 
                        alt="search"
                    />
                </button>
            </p>
            {(cocktails) ? <CardContainer cocktails={cocktails} /> : 'loading'}
    </div>)
}