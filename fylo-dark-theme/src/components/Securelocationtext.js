function Securelocationtext(props) {
  const text = props.text
  const newText = text.split('\n').map(str => <p>{str}</p>)
    return (
            newText
    )
        
}

export default Securelocationtext;
