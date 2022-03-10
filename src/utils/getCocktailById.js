import axios from "axios"

export default async function getCocktailById(props) {
    let reqUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props}`
    const data = await axios.get(reqUrl, (res) => {
        res.json();
    });
    return data.data.drinks[0];    
}