import React, {useState, useEffect} from "react";

import { CardContainer, LoadingSpinner } from "../Components";

import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    wrapper: {
        marginTop: '6rem'
    }
})

export default function Favorite() {
    const [database, setDatabase] = useState([]);
    const classes = useStyles()

    useEffect(() => {
        let saved = localStorage.getItem("database");
        let initialValue = []
        try {
            initialValue = JSON.parse(saved);
          } catch(ex){
            initialValue = undefined
          }
        
        setDatabase(initialValue)
    },[])

    return(<div className={classes.wrapper+' container'}>
            {/* <h1>Your unique and <br/> personal list</h1> */}
            {(database) ? <CardContainer cocktails={database} /> : <LoadingSpinner />}


        </div>)
}