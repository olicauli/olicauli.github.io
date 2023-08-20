import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className='max-w-full max-h-full bg-slate-950 bg-opacity-80 '>
      <div className="main-layout-grid gap-1 mx-auto h-screen container bg-slate-950 bg-opacity-0 overflow-auto">
        <Header></Header>
        <div className="container main-content font-extralight tracking-wider pl-2 row-span-1 rounded-xl justify-self-center overflow-fit mx-3 w-9/12 sm:w-11/12">
          <Outlet />
        </div>
        <Footer></Footer>
      </div>
    </div>
    
  )
}

export default Layout
