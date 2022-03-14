import React from "react";

import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {createUseStyles} from 'react-jss'

import 'react-lazy-load-image-component/src/effects/blur.css';

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
        textTransform: 'capitalize',
        position: 'relative'

    },

  })

export default function CardContainer(props) {
        
        return(
        <div className="row">
            {
                props.cocktails.map((element, index) => <div className="col-4"  key={index}><CardCocktail cocktail={element} /></div>)
            }
        </div>)
    }

function CardCocktail(props) {
    let {idDrink, strDrink, strDrinkThumb} = props.cocktail;
    const classes = useStyles()

    return(
    <Link 
        to={"/cocktail/"+idDrink} 
        className={classes.cardCocktail}
        data-aos="fade-left"
    >
         <LazyLoadImage
            alt={"foto-cocktail"}
            height={'auto'}
            src={`${strDrinkThumb}`} // /preview for low res
            width={'100%'}
            effect="blur"
            className={classes.fotoCocktail}
        />
            
        <h2 className={classes.textCocktail}>{strDrink}</h2>
    </Link>)
}