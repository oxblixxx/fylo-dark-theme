import './App.css'
import Fylodesc from './components/Fylodesc'
import Getstartedbtn from './components/Getstartedbtn'
import Header from './components/Header'
import Navimage from "./components/Navimage"
import Securelocation from './components/Securelocation'

function App() {
  return (
    <div className='container'>
      <Header />
      <Navimage />
      <Securelocation />
      <Fylodesc />
      <Getstartedbtn />

    </div>
  )
}

export default App;
