import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
// Views
import {Home} from './views';
import 'chota';


export default function App() {
  const setLight = () => document.body.classList.remove('dark');
  const setDark = () => document.body.classList.add('dark');


  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout setLight={setLight} setDark={setDark}/>}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="dashboard" element={<Dashboard />} />

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
        <div className="nav-left hide-xs">
          <Link to='/'><img src="https://icongr.am/clarity/menu.svg?size=128&color=000000" alt="menu" width="28px" height="28px" /></Link>
        </div>
        <div className="nav-center">
          <Link to="/">Matail</Link>
        </div>
        <div className="nav-right hide-xs">
        <Link to='/search'><img src="https://icongr.am/clarity/heart.svg?size=128&color=000000" alt="menu" width="28px" height="28px" /></Link>
        </div>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}


function Search() {
  return (
    <div>
      <h2>Search</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
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