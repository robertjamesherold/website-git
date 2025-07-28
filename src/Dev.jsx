import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { PageTransition } from '@ut/PageTransition.jsx'
import Navigation from '@ly/Navigation/Navigation'
import { Footer } from '@ly/Footer/Footer'
import { CvPage, SkillPage, StoryPage } from '@pg/Pages.jsx'
import { ConcreteGoldPage, ContactPage, HomePage, ProjectPage, StudyPage } from '@pg/Pages.jsx'
import '@scss/global.scss'

function AnimatedRoutes() {
  const location = useLocation()
  
  // Definiere die Pfade für die Über-Mich TabBar
  const aboutTabBarRoutes = ['/story', '/skills', '/lebenslauf']
  const showAboutTabBar = aboutTabBarRoutes.includes(location.pathname)
  
  // Definiere die Pfade für die Projekte TabBar
  const projectTabBarRoutes = ['/projekte', '/fallstudien']
  const showProjectTabBar = projectTabBarRoutes.some(route => 
    location.pathname === route || location.pathname.startsWith(route + '/')
  )

  return (
    <>
  
      
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path='' element={<HomePage />} />   
          
          <Route path='/story' element={<StoryPage />} />
          <Route path='/skills' element={<SkillPage />} />
          <Route path='/lebenslauf' element={<CvPage />} />
          <Route path='/projekte' element={<ProjectPage />} />
          <Route path='/fallstudien' element={<StudyPage />} />
          <Route path='/fallstudien/concretegold' element={<ConcreteGoldPage />} />
          <Route path='/kontakt' element={<ContactPage />} />
        </Routes>
        <Footer />
      </PageTransition>
    </>
  )
}

export default function App() {
  return (
    <Router>
      <Navigation />
      <AnimatedRoutes />
    </Router>
  )
}