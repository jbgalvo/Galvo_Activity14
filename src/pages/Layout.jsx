import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="container pt-3">
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default Layout;