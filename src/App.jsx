import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from '@ly/Navigation/Navigation'
import  { HomePage }   from '@pg/HomePage'
import { Contact } from '@ly/Contact/Contact'
import { AboutPage } from '@pg/AboutPage'
import { ScrollToTop } from '@ho/ScrollToTop'
import { Story } from '@ly/Story/Story'
import { CV } from '@ly/Lebenslauf/Lebenslauf'
import { Footer } from '@ly/Footer/Footer'
import { Projects } from '@ly/Projekte/Projekte'
import { Skills } from '@ly/Skills/Skills'
import '@scss/global.scss'
const App = () => {

return (
  <Router>
    <Navigation />
    <ScrollToTop />
    <Routes>
      <Route path='/' element={ <HomePage /> } />
      <Route path='/übermich' element={ <AboutPage /> } />
      <Route path='/kontakt' element={ <Contact /> } />
      <Route path='/story' element={ <Story /> } />
      <Route path='/lebenslauf' element={ <CV /> } />
      <Route path='/skills' element={ <Skills /> } />
      <Route path='/projekte' element={ <Projects /> } />
    </Routes>
    <Footer />
  </Router>
)
}

export default App