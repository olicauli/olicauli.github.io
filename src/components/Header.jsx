import Nav from "./Nav.jsx"

const Header = () => {
  return (
    <header className="p-2 row-span-1 mb-5">
      <h1 className=" before:hidden italic text-5xl font-extralight tracking-widest w-min mx-auto flip-header"><span>oli</span>.space</h1>
      <Nav></Nav>
      <div className="py-2 max-w-5xl mx-auto border-solid rounded border-b-4 border-red-400"></div>
    </header>
  )
}

export default Header
