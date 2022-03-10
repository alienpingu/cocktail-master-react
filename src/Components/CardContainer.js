

export default function CardContainer(props) {
    var cocktails = [
        {
            name: 'mojito',
            img: 'https://picsum.photos/200/200',
            id: '00'
        },
        {
            name: 'margarita',
            img: 'https://picsum.photos/200/200',
            id: '01'
        },
        {
            name: 'kiev mule',
            img: 'https://picsum.photos/200/200',
            id: '02'
        },
        {
            name: 'mojito',
            img: 'https://picsum.photos/200/200',
            id: '00'
        },
        {
            name: 'margarita',
            img: 'https://picsum.photos/200/200',
            id: '01'
        },
        {
            name: 'kiev mule',
            img: 'https://picsum.photos/200/200',
            id: '02'
        },
      ]; 

    return(<div className="row card-container">
        {cocktails.map((cocktail, index) => <div key={index} className="col-4 is-horizontal-align"><CardCocktail cocktail={cocktail}/></div>)}
    </div>)
}

function CardCocktail(props) {
    let {id, name, img} = props.cocktail;
    return(
    <div className="card-cocktail is-full-width">
        <img src={img} alt="foto-cocktail" className="is-full-width"/>
        <h2>{name}</h2>
        <p className="button">more info {id}</p>
    </div>)
}