import PropTypes from 'prop-types';

const Project = ({title, desc, link, image}) => {

  const backgroundImg = 
  {
    backgroundImage: 'url('+ image + ')',
    backgroundSize: 'fit',
  }

  return (
    <a href="#" className='fade-in-3 w-80 h-40  rounded-xl project text-ellipsis overflow-clip' style={backgroundImg}>
      <div className='bg-red-950 bg-opacity-20 h-full w-full' >
        <h2 className='text-center font-semibold mx-auto h-fit px-2 py-1 mb-1 bg-red-400 bg-opacity-100 rounded text-red-50 tracking-widest'>{ title }</h2>
        <p className='text-center text-red-100 tracking-widest text-ellipsis '> { desc }</p>
      </div>
    </a>
  )
} 

Project.propTypes = 
{
  title: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
}

export default Project
