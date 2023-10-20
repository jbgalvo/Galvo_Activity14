import { Link, NavLink } from "react-router-dom";
import reactLogo from '../assets/react.svg';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={reactLogo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top me-2" />
            React Routing
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="services">Services</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;