import axios from "axios"

export default async function getCocktailsFromSearch(props) {
    let reqUrl = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${props}`
    const data = await axios.get(reqUrl, (res) => {
        res.json();
    });
    return data.data.drinks;    
}