import './Button.css'

function Button(props) {
  return (
    <button className="default-btn rounded-3xl w-64 h-16">
      <p>{props.text}</p>
    </button>
  )
}

export default Button
