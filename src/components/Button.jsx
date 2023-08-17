import PropTypes from 'prop-types';

const Button = ({text}) => {
  return (
    <div>
      <a href="#" className="btn">{ text }</a>
    </div>
  )
}

Button.propTypes = 
{
    text: PropTypes.string,
}

export default Button
