import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className='max-w-full max-h-full bg-slate-950 bg-opacity-80 '>
      <div className="main-layout-grid gap-1 mx-auto h-screen container bg-slate-950 bg-opacity-0 overflow-auto">
      <div className=" border-solid bg-slate-950 bg-opacity-0 rounded p-2 row-span-1 mb-5 border-b-4 border-fuchsia-300 shadow-black shadow-2xl">
        <Header></Header>
        <Nav></Nav>
      </div>
      <div className="container main-content font-extralight tracking-wider pl-2 row-span-1 rounded-xl justify-self-center overflow-fit mx-3 w-9/12 sm:w-11/12">
        <Outlet />
      </div>
        
      <div className=" max-h-10 py-1 bg-slate-950 bg-opacity-0 rounded border-teal-300 border-t-4">
        <Footer></Footer>
      </div>
        
      </div>
    </div>
    
  )
}

export default Layout
