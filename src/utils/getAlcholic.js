import axios from "axios"

export default async function getCocktailById(props) {
    let reqUrl = `www.thecocktaildb.com/api/json/v1/1/list.php?a=list`
    const data = await axios.get(reqUrl, (res) => {
        res.json();
    });
    return data.data.drinks[0];    
}