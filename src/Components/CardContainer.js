import React from "react";

import { Link } from "react-router-dom";
import { LazyLoadImage , LazyLoadComponent} from 'react-lazy-load-image-component';
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
        color: '#fefefe',
        textAlign: 'center',
        textTransform: 'capitalize',
        position: 'relative',
        fontFamily: "'Lily Script One', cursive",
        textShadow: '1px 1px 0px #000'

    },

  })

export default function CardContainer(props) {
        
        return(
        <div className="row">
            <LazyLoadComponent>
            {
                props.cocktails.map((element, index) => <div className="col-4"  key={index}><CardCocktail cocktail={element} /></div>)
            }
            </LazyLoadComponent>
        </div>)
    }

function CardCocktail(props) {
    let {idDrink, strDrink, strDrinkThumb} = props.cocktail;
    const classes = useStyles()

    return(
    <Link 
        to={"/c/"+idDrink} 
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

