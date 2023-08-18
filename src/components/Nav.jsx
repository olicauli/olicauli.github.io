import Button from './Button'

const Nav = () => {
  return (
    <>
      <nav className="flex flex-wrap overscroll-auto justify-center">
        <Button link="home" text="home"/>
        <Button link="about" text="who am i?"/>
        <Button link="contact" text="contact info?"/>
      </nav>
    </>
  )
}

export default Nav
