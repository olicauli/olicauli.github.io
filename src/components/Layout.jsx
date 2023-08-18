import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 p-4 h-screen bg-slate-900">
      <div className="col-span-12 border-solid border-4 border-red-400 rounded">
        <Header></Header>
      </div>
      <div className="col-span-2 row-span-10 place-content-evenly border-solid border-4 border-red-400">
        <Nav></Nav>
      </div>
      <div className="font-extralight tracking-wider pl-2 col-span-10 row-span-10 border-solid border-4 border-red-400">
        <Outlet />
      </div>
        
      <div className="col-span-12 border-solid border-4 border-red-400">
        <Footer></Footer>
      </div>
        
    </div>
  )
}

export default Layout
