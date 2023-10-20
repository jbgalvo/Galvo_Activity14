import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function Layout() {
  return (
    <>
      <main className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="container pt-3">
          <Outlet></Outlet>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Layout;