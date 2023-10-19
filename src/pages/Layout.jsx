import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <h1>Layout Component</h1>
      <div className="container">
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default Layout;