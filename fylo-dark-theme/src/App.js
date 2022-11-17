import './App.css'
import Accessible from './components/Accessible'
import Fylostoredesc from './components/Fylostoredesc'
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
      <Fylostoredesc text = {"Fylo stores all your most important files in one secure location.\n Access them wherever you need, share and collaborate with\n friends family, and co-workers."}/>
    </div>
  )
}

export default App;
