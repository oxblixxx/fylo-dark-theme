import './Button.css'

function Button(props) {
  return (
    <button className="default-btn bg-red-900  w-60 h-16">
      <p>{props.text}</p>
    </button>
  )
}

export default Button
