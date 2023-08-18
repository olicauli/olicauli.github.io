import Button from '../components/Button'

const Home = () => {
  return (
    <div className="">
      <h1 className='headers'>hi, i'm oli!</h1>
      <h1>welcome to my portfolio.</h1>
      <p>still a work in progress :]</p>
      <br/>
      <Button link="about"/>
      <Button link="contact"/>
      <br/>
      <br/>
      <h1>recent projects</h1>
    </div>
  )
}

export default Home
