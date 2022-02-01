import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <ul>
        Support
        <li>
          <Link to="/category">Discover more</Link>
        </li>
        <li>
          <Link to="/contacts">Contact us</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
      <span>Follow us</span>
    </footer>
  );
}

export default Footer;
