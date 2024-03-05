import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({link, text, icon}) => {
  return (
    <Link 
    to={link==="home"? "/" : "".concat(link)}
    className="button mx-1 py-1 px-3 rounded mt-2 
    transition-all ease-in duration-200
     mouseup hover:bg-opacity-70
     font-extralight">
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
