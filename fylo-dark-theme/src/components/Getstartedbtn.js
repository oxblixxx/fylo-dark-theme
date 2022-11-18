import Button from './Button'
import './Getstartedbtn.css'

function Getstartedbtn() {
  const description = 'Get started'
  return (
    <div className="get-started-btn relative ">
      <Button text={description} />
    </div>
  )
}

export default Getstartedbtn
