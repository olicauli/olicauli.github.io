import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Button = ({link}) => {
  return (
    <Link 
    to={link==="home"? "/" : "".concat(link)}
    className="bg-slate-700 mx-3 py-1 px-3 rounded mt-2 
    transition-all ease-in duration-100
    hover:bg-slate-800"
    >{ link }</Link>
  )
}

Button.propTypes = 
{
    link: PropTypes.string,
}

export default Button
