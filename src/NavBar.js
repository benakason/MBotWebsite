import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <p>EECS 467 - Text and Drive Bot</p>
      <ul className="nav-bar-ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
