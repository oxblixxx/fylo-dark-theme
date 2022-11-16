import Logo from '../images/logo.svg'
// import Profile from '../images/profile-3.jpg'

function Header() {
  return (
    <header>
      <ul className="text-white float-right space-x-16 flex mt-12 mr-12">
        <li className="absolute left-14"><img src={Logo} alt="Website-Logo"/></li>
        <li className='mt-2'><a href="https://www.google.com">Features</a></li>
        <li className='mt-2'><a href="https://www.google.com">Team</a></li>
        <li className='mt-2' ><a href="https://www.google.com">Sign in</a></li>
      </ul>
    </header>
  )
}

export default Header
