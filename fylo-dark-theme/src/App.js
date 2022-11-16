import './App.css'
import Header from './components/Header'
import Navimage from "./components/Navimage"
import Securelocation from './components/Securelocation'

function App() {
  return (
    <div className='container'>
      <Header />
      <Navimage />
      <Securelocation text={"All your files in one secure location,\n accessible anywhere"}/>
      
    </div>
  )
}

export default App;
