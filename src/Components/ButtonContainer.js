import React from "react";
import { Link } from "react-router-dom";

export default function ButtonContainer(props) {
    
    let {ingredientsList} = props;
    
    return(
        <div>
            <div className="row">
            {
                ingredientsList.map((e, i) => {
                    
                        return(
                            <div key={i} className="col-3">
                                <Link 
                                    className='button is-full-width text-center'
                                    to={`/i/${e.value}`}>
                                        {e.label}
                                </Link>
                            </div>
                        )
                })
            }
            </div>
        </div>
    )
}
