import axios from "axios"

export default async function getCocktailById(props) {
    let reqUrl = `https://thecocktaildb.com/api/json/v1/1/list.php?i=list`
    const data = await axios.get(reqUrl, (res) => {
        res.json();
    });
    return data.data.drinks;    
}