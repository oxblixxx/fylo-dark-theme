import Introimage from '../images/illustration-intro.png'
import "./Navimage.css"

function Navimage() {
    return(
     <nav className='navimage absolute' >
         <img src={Introimage} alt="" />
     </nav>
    )
}

export default Navimage