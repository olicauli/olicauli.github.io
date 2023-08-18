import Button from "../components/Button"

const NoPage = () => {
  return (
    <div className="text-center">
    <h1 className="headers">404</h1>
    <p>looks like the page couldn't be found!</p>
    <Button link="home" text="head back to the home page!"/>
    </div>
  )
}

export default NoPage
