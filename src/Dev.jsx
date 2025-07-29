import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { PageTransition } from '@ut/PageTransition.jsx'
import Navigation from '@ly/Navigation/Navigation'
import Footer from '@ly/Footer/Footer'
import { CvPage, SkillPage, StoryPage } from '@pg/Pages.jsx'
import { DynamicCaseStudyPage } from '@pg/DynamicCaseStudyPage'
import { DynamicProjectStudyPage } from '@pg/DynamicProjectStudyPage'

import { ContactPage, HomePage, ProjectPage, CasePage } from '@pg/Pages.jsx'
import '@scss/global.scss'

function AnimatedRoutes() {
  const location = useLocation()
  


  return (
    <>
  
      
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path='' element={<HomePage />} />   
          
          <Route path='/story' element={<StoryPage />} />
          <Route path='/skills' element={<SkillPage />} />
          <Route path='/lebenslauf' element={<CvPage />} />
          <Route path='/projekte' element={<ProjectPage />} />
          <Route path='/fallstudien' element={<CasePage />} />
          <Route path='/projekte/:slug' element={<DynamicProjectStudyPage />} />
          <Route path="/fallstudien/:slug" element={<DynamicCaseStudyPage />} />
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