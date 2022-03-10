import axios from "axios"

export default function getCocktailById(props) {
    let reqUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props}`
    return axios.get(reqUrl, (res) => {
        res.json()
    }).then(data => {
        return data.data.drinks[0];
    })    
}