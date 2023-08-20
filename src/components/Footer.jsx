import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faItchIo, faYoutube, faSoundcloud } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="max-h-10 py-1 rounded flex justify-between border-red-400 border-t-4 my-auto">
      <p className="text-teal-100 pl-2 w-fit text-center text-xs  italic tracking-widest font-extralight">written by olicauli, 2023-present.
      <span className="text-teal-100 font-extralight text-xs italic hidden md:inline"> all images from <a href="https://unsplash.com/">unsplash.</a></span></p>
      <div className="text-teal-100 w-fit text-xs italic tracking-widest font-extralight">
        <a className="pr-2 w-fit text-xs" href="#"><FontAwesomeIcon icon={faGithub} size='xl' /></a>
        <a className="pr-2 w-fit text-xs" href="#"><FontAwesomeIcon icon={faItchIo} size='xl'/></a>
        <a className="pr-2 w-fit text-xs" href="#"><FontAwesomeIcon icon={faYoutube} size='xl' /></a>
        <a className="pr-2 w-fit text-xs" href="#"><FontAwesomeIcon icon={faSoundcloud} size='xl' /></a>
      </div>
    </footer>
  )
}

export default Footer
