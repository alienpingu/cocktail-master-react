import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {createUseStyles} from 'react-jss'

import { LoadingSpinner } from "../Components";
import { getCocktailById, addToDatabase } from "../utils";

const useStyles = createUseStyles({
  wrapper: {
    marginTop: '6rem',
  },
  drinkThumb: {
    borderRadius: '3rem'
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }


})

export default function Cocktail(props) {
    let {idDrink} = useParams();
    let [cocktailJson, setCocktail] = useState()

    useEffect(() => {
        let promise1 = new Promise((resolve, reject) => {
            resolve(getCocktailById(idDrink))
          });
          
          promise1.then((value) => {
            setCocktail(value)
            // expected output: "Success!"
          });

    },[idDrink])
    
    return(<div>
      
      {(cocktailJson) ? <CockatailPage cocktailJson={cocktailJson}/> : <LoadingSpinner />}

    </div>)
}

function CockatailPage(props) {
  let {
    idDrink,
    strDrinkThumb,
    strGlass,
    strDrink,
    strCategory,
    strTags,
    strInstructions,
    strIngredient1,
    strMeasure1,
    strIngredient2,
    strMeasure2,
    strIngredient3,
    strMeasure3,
    strIngredient4,
    strMeasure4,
    strIngredient5,
    strMeasure5,
    strIngredient6,
    strMeasure6,
    strIngredient7,
    strMeasure7,
    strIngredient8,
    strMeasure8,
    strIngredient9,
    strMeasure9,
    strIngredient10,
    strMeasure10,
    strIngredient11,
    strMeasure11,
    strIngredient12,
    strMeasure12,
    strIngredient13,
    strMeasure13,
    strIngredient14,
    strMeasure14,
    strIngredient15,
    strMeasure15,


  } = props.cocktailJson
  const classes = useStyles();

  return(
    <div className={`container ${classes.wrapper}`}>
      <div className="row">
        <div className="col">
          <img className={classes.drinkThumb} src={strDrinkThumb} alt="foto-drink" />  
          <p>Glass: {strGlass}</p>
        </div>
        <div className="col">
          <h1 className={classes.title}>
            <span>{strDrink}</span>
            <img 
              src="https://icongr.am/feather/heart.svg?size=128&color=currentColor" 
              alt="heart" 
              width={'24px'}
              height={'24px'}
              onClick={e => addToDatabase({idDrink: idDrink, strDrink: strDrink, strDrinkThumb: strDrinkThumb})}
            />
          </h1>
          <p>{strCategory}</p>
          <p>
            {
              ((strTags || '').split(',').length > 1) ?
                strTags.split(',').map((e,i) => <span key={i} className="tag">{e}</span>)
                :
                null
            }
          </p>
          <h4>Instructions</h4>
          <p>{strInstructions}</p>
            <hr />
          <table>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Qty</th>
              </tr>
            </thead>
            
            <tbody>
              <tr>
                <td>{strIngredient1}</td>
                <td>{strMeasure1}</td>
              </tr>
              <tr>
                <td>{strIngredient2}</td>
                <td>{strMeasure2}</td>
              </tr>
              <tr>
                <td>{strIngredient3}</td>
                <td>{strMeasure3}</td>
              </tr>
              <tr>
                <td>{strIngredient4}</td>
                <td>{strMeasure4}</td>
              </tr>
              <tr>
                <td>{strIngredient5}</td>
                <td>{strMeasure5}</td>
              </tr>
              <tr>
                <td>{strIngredient6}</td>
                <td>{strMeasure6}</td>
              </tr>
              <tr>
                <td>{strIngredient7}</td>
                <td>{strMeasure7}</td>
              </tr>
              <tr>
                <td>{strIngredient8}</td>
                <td>{strMeasure8}</td>
              </tr>
              <tr>
                <td>{strIngredient9}</td>
                <td>{strMeasure9}</td>
              </tr>
              <tr>
                <td>{strIngredient10}</td>
                <td>{strMeasure10}</td>
              </tr>
              <tr>
                <td>{strIngredient11}</td>
                <td>{strMeasure11}</td>
              </tr>
              <tr>
                <td>{strIngredient12}</td>
                <td>{strMeasure12}</td>
              </tr>
              <tr>
                <td>{strIngredient13}</td>
                <td>{strMeasure13}</td>
              </tr>
              <tr>
                <td>{strIngredient14}</td>
                <td>{strMeasure14}</td>
              </tr>
              <tr>
                <td>{strIngredient15}</td>
                <td>{strMeasure15}</td>
              </tr>
            </tbody>

          </table>
        </div>  
      </div>
    </div>
    )
}