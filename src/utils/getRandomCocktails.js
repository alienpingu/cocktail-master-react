import axios from "axios"

export default function getRandomCocktails(n) {
    const getRandomNumberBetween = (min,max) => Math.floor(Math.random()*(max-min+1)+min);
    const lookupRequestUrl = 'https://thecocktaildb.com/api/json/v1/1/lookup.php?i='
    let arrayOfIdForRequest = [];
    let arrayOfCocktails =[];

    
    const populateArrayWithRandomId = (n) => {
        for (let i = 0; i < n; i++) {
           let tempId = getRandomNumberBetween(0,60);
           let reqUrl = (tempId < 10) ? `${lookupRequestUrl}1100${tempId}` : `${lookupRequestUrl}110${tempId}`
           arrayOfIdForRequest.push(reqUrl);
           axios.get(reqUrl, (res) => {
                res.json()
            }).then(data => {
                if (data.data.drinks !== null) {
                    arrayOfCocktails.push(data.data.drinks[0])
                } else {
                    i = i - 1
                    console.log('🪁 Lookup: Invalid ID')
                }
            })
        }
        

    }
    populateArrayWithRandomId(n);

    return arrayOfCocktails;
}