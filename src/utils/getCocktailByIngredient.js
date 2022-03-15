import axios from "axios"

export default async function getCocktailByIngredient(props) {
    let reqUrl = `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${props}`
    const data = await axios.get(reqUrl, (res) => {
        res.json();
    });
    return data.data.drinks;    
}