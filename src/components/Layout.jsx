import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
        <Header></Header>
        <Nav></Nav>
        <Outlet />
        <Footer></Footer>
    </>
  )
}

export default Layout
