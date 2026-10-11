import Home from "./Home";
import "./App.css";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Singup from "./SIgnup";
import About from "./About";
import Explore from "./Explore";
import Dash from './dashboard';

function App() {
  return (
    <>
      <div className="navigation">
        <nav className="Navlink-subnavigation">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
          <NavLink  to="/signup"
            className={({ isActive }) => (isActive ? "active-link" : "")}>Signup</NavLink>
          <NavLink to="/explore"
            className={({ isActive }) => (isActive ? "active-link" : "")}>Explore</NavLink>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Singup />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/dashboard" element={<Dash />} />
      </Routes>
    </>
  );
}

export default App;
