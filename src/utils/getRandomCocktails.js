export default function getRandomCocktails() {
    const getRandomNumberBetween = (min,max) => Math.floor(Math.random()*(max-min+1)+min);
    const lookupRequestUrl = 'www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
    let arrayOfIdForRequest = [];
    const populateArrayWithRandomId = (n) => {
        for (let i = 0; i < n; i++) {
           let tempId = getRandomNumberBetween(0,60);
           let id = (tempId < 10) ? `${lookupRequestUrl}1100${tempId}` : `${lookupRequestUrl}110${tempId}`
           arrayOfIdForRequest.push(id)
        }
    }
    populateArrayWithRandomId(5)
    return arrayOfIdForRequest;
}