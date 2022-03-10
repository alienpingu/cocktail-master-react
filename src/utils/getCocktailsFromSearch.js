import axios from "axios"

export default function getCocktailsFromSearch(props) {
    let reqUrl = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${props}`
    return axios.get(reqUrl, (res) => {
        res.json()
    }).then(data => {
        return data.data.drinks;
    })    
}