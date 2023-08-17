//import Button from "./Button"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav>
        <p>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Link to="/portfolio">portfolio</Link>
        </p>
      </nav>
    </div>
  )
}

export default Nav
