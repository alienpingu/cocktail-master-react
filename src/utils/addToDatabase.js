export default async function addToDatabase  (cocktailJson)  {
    let oldArray = localStorage.getItem("database");
    let realArray = []
    let newArray = ''
    if (oldArray) {
        try {
            realArray = JSON.parse(oldArray)
        } catch(ex) {
            realArray = []
            console.log('✒️ Creato nuovo DB nel browser locale')
        }
        realArray.push(cocktailJson)
         newArray = JSON.stringify(realArray)

    } else {
        realArray.push(cocktailJson)
        newArray = JSON.stringify(realArray)
    }
    
    localStorage.setItem("database", newArray);
    return realArray;
}
