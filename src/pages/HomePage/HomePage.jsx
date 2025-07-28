import { useState, useEffect } from 'react'
import styles from './_Home.module.scss'
import { Link } from 'react-router-dom'
import { Hero } from './hero/Hero' 
import { StatsCards } from './StatsCards/StatsCards'
import { ServiceListHomePage } from '@cm/Services/ServiceListHomePage'
import { ProjectListHomePage } from '@cm/ProjectList/ProjectListHomePage'



export function HomePage() {
  const [currentTech, setCurrentTech] = useState(0)

  const technologies = [
    'UI/UX Design',
    'Webdesign',
    'Figma',
    'HTML & CSS',
    'WordPress',
    'Photoshop'
  ]

  // Auto-rotate technologies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [technologies.length])

  return (
    <section id="home" className={ styles.home }>
      <div className={styles.container}>

        <Hero />



      <StatsCards />
      <ServiceListHomePage />
      <ProjectListHomePage />

        <div className={ styles.contactCta }>
          <div className={ styles.ctaContent }>
            <h2 className={ styles.ctaTitle }>Bereit für Ihr nächstes Design-Projekt?</h2>
            <p className={ styles.ctaDescription }>
              Lassen Sie uns gemeinsam Ihre Ideen visuell zum Leben erwecken.
              Ich freue mich auf Ihre Nachricht!
            </p>
            <Link to="/kontakt" className={ styles.contactButton }>
              Kontaktiere mich
            </Link>
          </div>
        </div>
      </div>
    </section>   
  )
}