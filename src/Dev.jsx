import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import  PageTransition  from '@ut/PageTransition.jsx'
import { Navigation } from '@ly/Navigation/Navigation'
import { Footer } from '@ly/Footer/Footer'
import { ProjektPage } from '@pg/ProjektPage.jsx'
import { StudyPage, ConcreteGoldPage } from '@pg/StudyPage.jsx'
import { ContactPage } from '@pg/ContactPage.jsx'
import { Startseite, Storyseite, Skillseite, Lebenslaufseite } from '@pg/Pages'

import '@scss/global.scss'

function AnimatedRoutes() {
  const location = useLocation()
  return (
  <>

    <PageTransition>

      <Routes location={location} key={location.pathname}>
        <Route path='' element={<Startseite />} />   
        <Route path='/story' element={<Storyseite />} />
        <Route path='/skills' element={<Skillseite />} />
        <Route path='/lebenslauf' element={<Lebenslaufseite />} />
        <Route path='/projekte' element={<ProjektPage />} />
        <Route path='/casestudies' element={<StudyPage />} />
        <Route path='/casestudies/concretegold' element={<ConcreteGoldPage />} />
        <Route path='/kontakt' element={<ContactPage />} />
      </Routes>
             <Footer />

    </PageTransition>
         
</>
  )
}

export default function App(){
  return (
    <Router>
      <Navigation/>
      <AnimatedRoutes />
    </Router>
  )
}
