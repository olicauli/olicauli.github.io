import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({link, text, icon}) => {
  return (
    <Link 
    to={link==="home"? "/" : "".concat(link)}
    className="mx-1 py-1 px-3 rounded mt-2 text-cyan-100
    transition-all ease-in duration-200
    hover:bg-slate-800 mouseup
    active:bg-slate-900 font-extralight">
    { icon ? <FontAwesomeIcon icon={icon} className='pr-3'/> : '' }{ text }
     </Link>
  )
}

Button.propTypes = 
{
    link: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.object,
}

export default Button
