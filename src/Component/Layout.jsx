import { Outlet } from "react-router"
import Navbar from "./Navbar"
// import SideBar from "./SideBar"


function Layout() {
  return (
    <>
      <Navbar/>
      {/* <SideBar/> */}
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default Layout
