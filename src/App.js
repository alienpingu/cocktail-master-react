import React from "react";
// React router dom 
import { Routes, Route, Outlet, Link } from "react-router-dom";
// Views
import {Home, Cocktail, Ingredients} from './views';
// Components
import { Navbar } from "./Components";
import Logo from './assets/logo.png';
// Styles
import 'chota';




export default function App() {
  const setLight = () => document.body.classList.remove('dark');
  const setDark = () => document.body.classList.add('dark');

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout setLight={setLight} setDark={setDark}/>}>
          <Route index element={<Home />} />
          <Route path="/cocktail/:idDrink" element={<Cocktail />} />
          <Route path="/i" element={<Ingredients />} />
          <Route path="/i/:nameIngredient" element={<Ingredients />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout(props) {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav className="nav">
        <div className="nav-center">
          <Link to="/" className="brand"><img src={Logo} alt="matail" /></Link>
        </div>
      </nav>
      <Navbar />
      <br />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
