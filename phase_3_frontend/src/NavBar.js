import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navBar">
      <h1 className="siteTitle">
        <img
          className="logo"
          src="https://media-exp1.licdn.com/dms/image/D5635AQFKEIO7J50lKg/profile-framedphoto-shrink_800_800/0/1667947544509?e=1669233600&v=beta&t=1a8eTl5kmgBiKHqUtbkC8C0DhCreZU_8kQQejrJ6K-o"
          alt="logo"
        />
        Site Title
      </h1>
      <ul>
        <li>
          <Link to="/">
            <a href="/" className="pokeDexLink">
              Placeholder
            </a>
          </Link>
        </li>
        <li>
          <Link to="/placeholder1">
            <a href="/placeholder1" className="placeholder">
              Placeholder1
            </a>
          </Link>
        </li>
        <li>
          <Link to="/placeholder2">
            <a href="/placeholder2" className="placeholder">
              Placeholder2
            </a>
          </Link>
        </li>
        <li>
          <Link to="/placeholder3">
            <a href="/placeholder3" className="placeholder">
              Placeholder3
            </a>
          </Link>
        </li>
        <li>
          <Link to="/placeholder4">
            <a href="/placeholder4" className="placeholder">
              Placeholder 4
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

// import { Link } from "react-router-dom";

// function NavBar() {
//   return (
//     <nav className="navBar">
//       <Link to="/">
//         <a href="/">Site Title</a>
//       </Link>
//     </nav>
//   );
// }

// export default NavBar;
