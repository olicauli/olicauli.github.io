import Button from './Button.jsx'
import { faHouse, faAddressCard, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <>
      <nav className="flex flex-wrap overscroll-auto justify-center">
        <Button link="home" text="home" icon={faHouse}/>
        <Button link="about" text="who am i?" icon={faAddressCard}/>
        <Button link="contact" text="contact info?" icon={faEnvelope}/>
      </nav>
    </>
  )
}

export default Nav
