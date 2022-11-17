import './App.css'
import Accessible from './components/Accessible'
import Header from './components/Header'
import Navimage from "./components/Navimage"
import Securelocation from './components/Securelocation'

function App() {
  return (
    <div className='container'>
      <Header />
      <Navimage />
      <Securelocation />
      <Accessible />
    </div>
  )
}

export default App;
