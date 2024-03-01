import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link className="navlink" to="/">
          Home
        </Link>
        <Link className="navlink" to={`../bugs`}>
          Bugs
        </Link>
        <Link className="navlink" to={`../users`}>
          Users
        </Link>
        <Link className="navlink" to={`../login`}>
          Login
        </Link>
        <Link className="navlink" to={`../register`}>
          Register
        </Link>
      </nav>
    </>
  );
}
