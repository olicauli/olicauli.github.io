import Button from "../components/Button"
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <div className="text-center">
    <h1 className="text-7xl before:hidden">4<span>0</span>4</h1>
    <p>looks like that page couldn't be found.</p>
    <Link to="/" className="link">take me back to the home page!</Link>
    </div>
  )
}

export default NoPage
