import PropTypes from 'prop-types';

const Project = ({title, desc, link, image}) => {

  const backgroundImg = 
  {
    backgroundImage: 'url('+ image + ')',
    backgroundSize: '100%',
  }

  return (
    <a href={link} rel="noreferrer noopener" target="_blank" className='project fade-in-3' style={backgroundImg}>
      <div className='bg-black bg-gradient-to-b from-black to-transparent bg-opacity-30 h-full w-full' >
        <h2 className='text-center font-bold text-md mx-auto h-fit px-2 py-1 mb-1 bg-red-400 bg-opacity-100 rounded text-black tracking-widest'>{ title }</h2>
        <p className='text-center px-1 text-purple-200 font-normal italic text-sm tracking-widest text-ellipsis '> { desc }</p>
      </div>
    </a>
  )
} 

Project.defaultProps = 
{
  image: '/assets/europeana-5TK1F5VfdIk-unsplash.jpg'
}

Project.propTypes = 
{
  title: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
}

export default Project
