import "./App.css";
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color : 'white'
    };
  return (
    <div className="Nav">
      <nav>
          <h3>List of Pages</h3>
          <ul className="nav-links">
            <Link style={navStyle} to="/">
                <li>Home</li>
            </Link>
            <Link style={navStyle} to="/about">
              <li>About page</li>
            </Link>
            <Link style={navStyle} to="/shop">
              <li>Shop Page</li>
            </Link>
          </ul>
      </nav>
    </div>
  );
};

export default Nav;
