import './App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import HeroSection from './components/HeroSection'
import { useEffect } from 'react'
import Clients from './components/Clients'
import Liveauction from './components/Liveauction'
import Steps from './components/Steps'
import PopularCollections from './components/PopularCollections'
import TopCreators from './components/TopCreators'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function App() {
  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <div className="App bg-[#1C121F] pb-8 w-screen overflow-hidden ">
      <HeroSection />
      <div>
        <Clients />
      </div>
      <div>
        <Liveauction />
      </div>
      <div>
        <Steps />
      </div>
      <div>
        <PopularCollections />
      </div>
      <div>
        <TopCreators />
      </div>
      <div>
        <Subscribe />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
