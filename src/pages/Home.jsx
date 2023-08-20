import ProjectDisplay from '../components/projects/ProjectDisplay'

const Home = () => {
  return (
    <div className="">
      <h1 className='headers move'>hi, i'm oli!</h1>
      <h1 className='move-2'>welcome to my portf<span>oli</span>o.</h1>
      <p className='move-2'>still a work in progress :]</p>
      <br/><br/>
      
      <h1 className='move-3'>my projects</h1>
      <ProjectDisplay className='move-3'/>
    </div>
  )
}

export default Home
