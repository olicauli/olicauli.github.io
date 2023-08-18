const Footer = () => {
  return (
    <footer className="max-h-10 py-1 rounded flex justify-between border-red-400 border-t-4 my-auto">
      <p className="text-teal-100 pl-2 w-fit text-center text-xs  italic tracking-widest font-extralight">written by oliver davies, 2023-present.
      <span className="text-teal-100 font-extralight text-xs italic hidden md:inline"> background image by <a href="https://unsplash.com/photos/p0j-mE6mGo4">lorenza herrero from unsplash.</a></span></p>
      <div className="text-teal-100 w-fit text-xs italic tracking-widest font-extralight">
        <a className="pr-2 w-fit text-xs" href="#">github</a>
        <a className="pr-2 w-fit text-xs" href="#">itch.io</a>
        <a className="pr-2 w-fit text-xs" href="#">youtube</a>
      </div>
    </footer>
  )
}

export default Footer
