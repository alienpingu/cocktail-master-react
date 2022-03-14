import React from "react";

import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {createUseStyles} from 'react-jss'



const useStyles = createUseStyles({
    cardCocktail: {
        width: '100%',
        borderRadius: '3rem',
        // animation: 'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.25s both',
        animationName: '$fadeIn',
        animationDuration: '0.5s',
        animationTimingFunction: 'ease-in-out',
        animationFillMode: 'both' 

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
    '@keyframes fadeIn': {
        from: {opacity: 0},
        to: {opacity: 1}
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
            src={`${strDrinkThumb}/preview`} // use normal <img> attributes as props
            width={'100%'}
            className={classes.fotoCocktail}
        />
            
        <h2 className={classes.textCocktail}>{strDrink}</h2>
    </Link>)
}