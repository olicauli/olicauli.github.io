import PropTypes from 'prop-types'
import ExternalLink from './ExternalLink'
import { faDiscord, faGithub, faItchIo, faYoutube, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import links from '../links.json'

const Socials = ({isList, hasDiscord, faSize}) => {
  return (
    <>
        {hasDiscord ? <ExternalLink isList={isList} faIcon={faDiscord} faSize={faSize} linkUrl={links.discord}/> : ''} 
        <ExternalLink isList={isList} faIcon={faGithub} faSize={faSize} linkUrl={links.github}/>
        <ExternalLink isList={isList} faIcon={faItchIo} faSize={faSize} linkUrl={links.itchio}/>
        <ExternalLink isList={isList} faIcon={faYoutube} faSize={faSize} linkUrl={links.youtube}/>
        <ExternalLink isList={isList} faIcon={faSoundcloud} faSize={faSize} linkUrl={links.soundcloud}/>
    </>
  )
}

Socials.propTypes = 
{
    isList: PropTypes.bool,
    hasDiscord: PropTypes.bool,
    faSize: PropTypes.string
}

Socials.defaultProps = 
{  
    isList: false,
    hasDiscord: false
}

export default Socials
