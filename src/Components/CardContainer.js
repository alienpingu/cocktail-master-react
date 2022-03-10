import { Link } from "react-router-dom";

import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    cardCocktail: {
        width: '100%',
        borderRadius: '3rem',
    },
    fotoCocktail: {
        width: '100%',
        borderRadius: '3rem',
    },
    textCocktail: {
        marginTop: '-64px',
        color: '#fff',
        textAlign: 'center',
        textTransform: 'capitalize'
    },

  })

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
    const classes = useStyles()

    return(
    <Link to={"/cocktail/"+id} className={classes.cardCocktail}>
        <img src={img} alt="foto-cocktail" className={classes.fotoCocktail}/>
        <h2 className={classes.textCocktail}>{name}</h2>
    </Link>)
}