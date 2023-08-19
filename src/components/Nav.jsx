import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <>
      <nav className="flex flex-wrap overscroll-auto justify-center">
        <Button link="home" text="home" icon/>
        <Button link="about" text="who am i?"/>
        <Button link="contact" text="contact info?"/>
      </nav>
    </>
  )
}

export default Nav
