import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App card text-white w-[317px] bg-[#1A1B21] rounded-xl overflow-hidden">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
