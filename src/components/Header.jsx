import Nav from "./Nav"

const Header = () => {
  return (
    <header className="border-solid rounded p-2 row-span-1 mb-5 border-b-4 border-red-400 shadow-black shadow-2xl">
      <h1 className=" before:hidden italic text-5xl shadow-black drop-shadow-xl font-extralight tracking-widest w-min mx-auto flip-header">oli.space</h1>
      <Nav></Nav>
    </header>
  )
}

export default Header
