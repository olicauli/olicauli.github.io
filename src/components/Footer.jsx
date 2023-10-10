import Socials from './Socials.jsx'
import ExternalLink from './ExternalLink.jsx'

const Footer = () => {
  return (
    <footer className="max-h-10 py-1">
      <div className="justify-between flex row-span-1 mx-auto rounded border-red-400 border-t-4 py-1 justify-self-center container-max-w">
        <p className="text-teal-100 pl-2 w-fit text-center text-xs  italic tracking-widest font-extralight">written by olicauli, 2023-present.
        <span className="text-teal-100 font-extralight text-xs italic hidden md:inline"> stock images from <ExternalLink linkUrl='https://www.unsplash.com' content='unsplash'/>.</span></p>

        <div className="text-teal-100 w-fit text-xs italic tracking-widest font-extralight footer-links">
          <Socials/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
