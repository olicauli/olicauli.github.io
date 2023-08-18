import Button from './Button'

const Nav = () => {
  return (
    <>
      <nav className="[&>a]:bg-slate-700 flex flex-wrap overscroll-auto">
        <Button link="home"/>
        <Button link="about"/>
        <Button link="contact"/>
        <Button link="portfolio"/>
      </nav>
    </>
  )
}

export default Nav
