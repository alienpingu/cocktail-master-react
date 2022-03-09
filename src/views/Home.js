import React from "react"

import { getRandomCocktails } from "../utils"

export default function Home(props) {
    return(<div id="home" className="container">
            <h1>Delicius cocktails<br/>for you</h1>
            <p className="grouped">
                <input type="search" name="search_home" id="search_home" placeholder="Search" />
                <button className="button icon-only">
                    <img 
                        onClick={getRandomCocktails}
                        src="https://icongr.am/feather/search.svg?size=16" 
                        alt="search"
                    />
                </button>
            </p>
    </div>)
}