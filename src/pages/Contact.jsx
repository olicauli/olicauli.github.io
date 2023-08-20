import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Socials from '../components/Socials'

const Contact = () => {
  return (
    <div>
      <h1 className="headers move">contact info</h1>
      <p className='fade-in-2'>the best way to contact me is through my email.</p><br/>
      <a href="mailto:olicauli@pm.me" className='fade-in-2 blue-link'> <FontAwesomeIcon icon={faEnvelope} size='2xl'/>  olicauli@pm.me</a>
      <br/><br/>
      <h1 className='fade-in-3'>other places you can find me</h1>
      <ul className="flex flex-wrap gap-6 py-1 fade-in-3">
        <Socials faSize='2xl' isList hasDiscord/>
      </ul>
    </div>
  )
}

export default Contact
