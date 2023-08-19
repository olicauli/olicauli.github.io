import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faItchIo, faYoutube, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div>
      <h1 className="headers">contact info</h1>
      <p>the best way to contact me is through my email.</p>
      <p>olicauli@pm.me</p>
      <br/>
      <h1>other places you can find me</h1>
      <ul className="inline flex flex-wrap gap-4 py-1">
        <li><a href="#"><FontAwesomeIcon icon={faDiscord} size='2xl'/></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faGithub} size='2xl' /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faItchIo} size='2xl' /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faYoutube} size='2xl' /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faSoundcloud} size='2xl' /></a></li>
      </ul>
    </div>
  )
}

export default Contact
