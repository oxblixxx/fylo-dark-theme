import Iconfiles from '../images/icon-any-file.svg'
import './Fylouses.css'


function Fylouses(){
    return(
        <nav className='fylo-uses p-64 text-white'>
            <img className="p-4 ml-24" src={Iconfiles} alt="" />
            <h1 className='ml-14'>Access your files, anywhere</h1>
            <p className='fylo-uses-text'>The ability to use a smartphone, tablet or computer</p>
            <p className='fylo-uses-text ml-2'>to acess your account means your files follow you
            </p> 
            <p className="fylo-uses-text ml-28">everywhere. </p>
        </nav>
    )
}

export default Fylouses