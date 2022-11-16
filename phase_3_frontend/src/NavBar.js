import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navBar">
      <Link to="/">
        <a href="/">Site Title</a>
      </Link>
    </nav>
  );
}

export default NavBar;
