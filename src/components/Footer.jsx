import Socials from './Socials.jsx'
import ExternalLink from './ExternalLink.jsx'

const Footer = () => {
  return (
    <footer className="max-h-10 py-1">
      <div className="justify-between flex row-span-1 mx-auto rounded border-red-400 border-t-4 py-1 justify-self-center container-max-w">
        <p className="pl-2 w-fit">written by olicauli, 2023-present.
        <span className="hidden md:inline"> stock images from <ExternalLink linkUrl='https://www.unsplash.com' content='unsplash'/>. background svg by <ExternalLink linkUrl='https://bgjar.com/' content='BGjar'/>.</span></p>

        <div className="w-fit text-xs italic tracking-widest font-extralight footer-links">
          <Socials/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
