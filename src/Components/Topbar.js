import React, {useState, useEffect} from "react";

import { Link } from "react-router-dom";

import {createUseStyles} from 'react-jss'
import {changeActualTheme} from '../utils';
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

        const [show, setShow] = useState(true);
        const [lastScrollY, setLastScrollY] = useState(0);
        const [theme, setTheme] = useState(Boolean(document.body.className !== 'dark'))
        const controlNavbar = () => {
          if (typeof window !== 'undefined') { 
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
              setShow(false); 
            } else { // if scroll up show the navbar
              setShow(true);  
            }
      
            // remember current page location to use in the next move
            setLastScrollY(window.scrollY); 
          }
        };
      
        useEffect(() => {
          if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
      
            // cleanup function
            return () => {
              window.removeEventListener('scroll', controlNavbar);
            };
          }
        });
        const changeTheme = () => {
          changeActualTheme()
          setTheme(!theme)

        }
        return(
        <div id="topbar" className={`${classes.topbar} ${(show) ? '' : 'is-hidden'}`}>
            <div
              onClick={e => changeTheme()}
            >
                <img className={classes.navItem} src={`https://icongr.am/feather/${(theme) ? 'moon' : 'sun'}.svg?size=64&color=6F7173`} alt="theme-icon" />
            </div>
            <Link to="/">
                <img className={classes.navItem} src={Logo} alt="logo" />
            </Link>
            <Link to="/">
                <img  className={classes.navItem} src={'https://icongr.am/feather/info.svg?size=64&color=6F7173'} alt="logo" />
            </Link>
        </div>)
    }
