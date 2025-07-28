import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import {  PageTransition } from '@ut/PageTransition.jsx'
import { CvPage, SkillPage, StoryPage } from '@pg/Pages.jsx'
import TabBar from '@ut/TabBar/TabBar'

import '@scss/global.scss'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <>
      {/* TabBar - wird oben auf Desktop, unten auf Mobile angezeigt */}
      <TabBar />
      
      {/* Page Content mit Transitions */}
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<StoryPage />} />
          <Route path='/skills' element={<SkillPage />} />
          <Route path='/lebenslauf' element={<CvPage />} />
        </Routes>
      </PageTransition>
    </>
  )
}

export default function About() {
  return (
    <Router>
      <div className="app-container">
        <AnimatedRoutes />
      </div>
    </Router>
  )
}
