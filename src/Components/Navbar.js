import React, {useState, useEffect} from "react";

import { Link , useLocation} from "react-router-dom";

import {createUseStyles} from 'react-jss'





export default function Navbar(props) {
        const useStyles = createUseStyles({
            navbarContainer: {
                position: 'fixed',
                bottom: '0',
                left: '0',
                width:'100%',
                display: 'flex',
                justifyContent: 'space-around',
                zIndex: '2',
                padding: '12px 0',
                background: 'var(--bg-color)'
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
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    background: 'var(--bg-color)'


        
                }
            }
        
        })
        const classes = useStyles();
        let location = useLocation();
        
        const [show, setShow] = useState(true);
        const [lastScrollY, setLastScrollY] = useState(0);
      
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

        return(
        <div id="navbar" className={`${classes.navbarContainer} ${(show) ? '' : 'is-hidden'}` }>
            <Link to="/"> 
                <img 
                    src={`https://icongr.am/feather/search.svg?size=32&color=${(location.pathname === '/') ? 'ff4b1f' : '6F7173'}`} 
                    alt="search"
                />
            </Link>
            <Link to="/f">
                <img 
                    src={`https://icongr.am/feather/heart.svg?size=32&color=${(location.pathname === '/f') ? 'ff4b1f' : '6F7173'}`} 
                    alt="search"
                />
            </Link>
        </div>)
    }
