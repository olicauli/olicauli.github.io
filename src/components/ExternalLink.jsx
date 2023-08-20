import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ExternalLink = ({isList, faIcon, faSize, linkUrl, content}) => {
  let output = () => 
  {
    return isList? 
    <li><a href={linkUrl} rel="noreferrer noopener" target="_blank">
    {faIcon ? <FontAwesomeIcon icon={faIcon} size={faSize}/> : ''}
    { content }
    </a></li> : 
    
    <a href={linkUrl} rel="noreferrer noopener" target="_blank">
    {faIcon ? <FontAwesomeIcon icon={faIcon} size={faSize}/> : ''}
    { content }
    </a>;
  }

  return (
    <>
    {output()}
    </>
  )
}

ExternalLink.propTypes = 
{
    isList: PropTypes.bool,
    faIcon: PropTypes.object,
    faSize: PropTypes.string,
    linkUrl: PropTypes.string,
    content: PropTypes.string
}

ExternalLink.defaultProps = 
{
  isList: false,
  faSize: 'xl'
}

export default ExternalLink
