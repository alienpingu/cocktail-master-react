import axios from "axios"

function makeid() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    result = characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}

export default async function getRandomCocktails() {

    let randomLetter = makeid();
    let reqUrl = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${randomLetter}`
    const data = await axios.get(reqUrl, (res) => {
        res.json();
    });
    return data.data.drinks;    
}