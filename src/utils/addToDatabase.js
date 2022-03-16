export default async function addToDatabase  (idDrink)  {
    let oldArray = localStorage.getItem("database");
    let realArray = []
    try {
        realArray = JSON.parse(oldArray)
    } catch(ex) {
        realArray = []
        console.log('✒️ Creato nuovo DB nel browser locale')
    }
    realArray.push(idDrink)
    let newArray = JSON.stringify(realArray)
    localStorage.setItem("database", newArray);
    return realArray;
}
