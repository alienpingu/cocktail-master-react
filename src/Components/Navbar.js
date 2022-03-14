import React from "react";

import { Link , useLocation} from "react-router-dom";

import {createUseStyles} from 'react-jss'



const useStyles = createUseStyles({
    navbarContainer: {
        position: 'fixed',
        bottom: '0',
        left: '0',
        width:'100%',
        display: 'flex',
        justifyContent: 'space-around',
        zIndex: 3,
        background: '#fefefe',
        padding: '12px 0',
    },
    activeNavLink: {
        color: '#ff4b1f'
    },
    '@media (min-width: 850px)': {
        navbarContainer: {
            position: 'fixed',
            bottom: '50%',
            top: '40%',
            left: '0.5rem',
            width:'6rem',
            height: '22rem',
            alignItems: 'center',
            flexDirection: 'column',
            borderRadius: '2rem',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

        }
      }

  })

export default function Navbar() {
        const classes = useStyles();
        let location = useLocation();
        return(
        <div id="navbar" className={classes.navbarContainer}>
            <Link to="/"> 
                <img 
                    src={`https://icongr.am/feather/search.svg?size=32&color=${(location.pathname === '/') ? 'ff4b1f' : '6F7173'}`} 
                    alt="search"
                />
            </Link>
            <Link to="/i" >
                <img 
                    src={`https://icongr.am/feather/package.svg?size=32&color=${(location.pathname === '/i') ? 'ff4b1f' : '6F7173'}`} 
                    alt="search"
                />
            </Link>
            <Link to="/fav">
                <img 
                    src={`https://icongr.am/feather/heart.svg?size=32&color=${(location.pathname === '/fav') ? 'ff4b1f' : '6F7173'}`} 
                    alt="search"
                />
            </Link>
        </div>)
    }