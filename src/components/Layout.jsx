import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="main-layout-grid mx-auto h-screen container bg-slate-900 bg-opacity-70 overflow-auto">
      <div className=" border-solid bg-slate-950 bg-opacity-80 p-2 row-span-1 rounded-xl mb-5">
        <Header></Header>
        <Nav></Nav>
      </div>
      <div className="container main-content font-extralight tracking-wider pl-2 row-span-1 rounded-xl justify-self-center overflow-fit mx-3 w-9/12 sm:w-11/12">
        <Outlet />
      </div>
        
      <div className=" max-h-10 py-1 bg-slate-950 rounded-lg">
        <Footer></Footer>
      </div>
        
    </div>
  )
}

export default Layout
