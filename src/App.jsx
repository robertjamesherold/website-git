import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from '@ho/ScrollToTop'
import { Navigation } from '@ly/Navigation/Navigation'
import { Footer } from '@ly/Footer/Footer'
import { Startseite, Storyseite, Skillseite, Lebenslaufseite, Projektseite, Kontaktseite } from '@pg/Pages'


import '@scss/global.scss'
const App = () => {

return (
  <Router>
    <Navigation />
    <ScrollToTop />
    <Routes>
      <Route path='./' element={ <Startseite /> } />
      <Route path='/story' element={ <Storyseite /> } />
      <Route path='/skills' element={ <Skillseite /> } />
      <Route path='/lebenslauf' element={ <Lebenslaufseite /> } />
      <Route path='/projekte' element={ <Projektseite /> } />
      <Route path='/kontakt' element={ <Kontaktseite /> } />

    </Routes>
    <Footer />
  </Router>
)
}

export default App