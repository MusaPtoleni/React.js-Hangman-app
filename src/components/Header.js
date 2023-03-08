import React  from "react-dom";
import {Link} from "react-router-dom";
import '../index.css';

// Setting a navbar and links to different pages
function Header() {
  return (
    <div>
      <nav className="top">
        <h1 className="gameName">Hangman</h1>
        <Link className="help" to="/help">
          Help
        </Link>
        <Link className="game" to="/game">Game</Link>
      </nav>
    </div>
  );
}

export default Header;