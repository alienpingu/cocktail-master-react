import React from "react";
import { Link } from "react-router-dom";
export default function ButtonContainer(props) {
    
    let {ingredientsList} = props;
    
    return(
        <div>
            <div className="row">
            {
                ingredientsList.map((e, i) => {
                    if (e.strIngredient1.split(' ').length < 2) {
                        return(<div key={i} className="col-3"><Link className='button is-full-width text-center'to={`/i/${e.strIngredient1.replace(' ', '%20')}`}>{e.strIngredient1}</Link></div>)
                    } else {
                        return(null)
                    }
                })
            }
            </div>
        </div>
    )
}
