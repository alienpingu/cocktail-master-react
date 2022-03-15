import React from "react";

import { Link } from "react-router-dom";

import {createUseStyles} from 'react-jss'

import Logo from '../assets/logo.png';




export default function Topbar(props) {
    const useStyles = createUseStyles({
        topbar: {
            zIndex: '2',
            position:'fixed',
            left:'0',
            top:'0',
            width:'100%',
            height: '6rem',
            padding: '1.5rem 1rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            background: 'var(--bg-color)'
    
        },
        navItem: {
            height: '3rem'
        }
      })
        const classes = useStyles();
        return(
        <div id="topbar" className={`${classes.topbar}`}>
            <div>
                <img className={classes.navItem} src={'https://icongr.am/feather/moon.svg?size=64&color=6F7173'} alt="logo" />
            </div>
            <Link to="/">
                <img className={classes.navItem} src={Logo} alt="logo" />
            </Link>
            <Link to="/">
                <img  className={classes.navItem} src={'https://icongr.am/feather/info.svg?size=64&color=6F7173'} alt="logo" />
            </Link>
        </div>)
    }
