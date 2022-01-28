import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="site-title">Custom Tier List</h1>
      <nav>
        <ul>
          <li>
            <Link to="#">Login</Link>
          </li>
          <li>
            <Link to="#">Discover</Link>
          </li>
          <li>
            <Link to="/create-new-tier-list">Create your first Tier List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
