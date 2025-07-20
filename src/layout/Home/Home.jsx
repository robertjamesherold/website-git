import { useState, useEffect } from 'react'
import styles from './_Home.module.scss'

export function Home() {
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
    <section id="home" className={styles.home}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Hallo, ich bin{' '}
              <span className={styles.heroName}>Robert James Herold</span>
            </h1>
            <div className={styles.heroSubtitle}>
              Mediendesigner mit Leidenschaft für{' '}
              <span className={styles.techRotator}>
                {technologies[currentTech]}
              </span>
            </div>
            <p className={styles.heroDescription}>
              Als Mediendesign-Student verwandle ich kreative Ideen in visuelle Realität 
              und erstelle benutzerfreundliche Designs, die echte Probleme lösen und begeistern.
            </p>
            
            <div className={styles.heroButtons}>
              <a href="#projects" className={styles.ctaButton}>
                Meine Projekte ansehen
              </a>
              <a href="#contact" className={styles.ctaButtonSecondary}>
                Kontakt aufnehmen
              </a>
            </div>

            {/* Social Links */}
            <div className={styles.socialLinks}>
              <a 
                href="https://robertjamesherold.com" 
                className={styles.socialLink}
                aria-label="Portfolio Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/robertjamesherold" 
                className={styles.socialLink}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="mailto:robertjamesherold@icloud.com" 
                className={styles.socialLink}
                aria-label="E-Mail"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.codeAnimation}>
              <div className={styles.codeLines}>
                <div className={styles.codeLine}>
                  <span className={styles.codeKeyword}>const</span>{' '}
                  <span className={styles.codeVariable}>designer</span>{' '}
                  <span className={styles.codeOperator}>=</span>{' '}
                  <span className={styles.codeString}>"creative"</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeKeyword}>function</span>{' '}
                  <span className={styles.codeFunction}>createDesigns</span>
                  <span className={styles.codeBracket}>()</span>{' '}
                  <span className={styles.codeBracket}>{'{'}</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeIndent}>  </span>
                  <span className={styles.codeKeyword}>return</span>{' '}
                  <span className={styles.codeString}>"amazing UX"</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeBracket}>{'}'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={styles.stats}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>3+</span>
              <span className={styles.statLabel}>Jahre Studium</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>135</span>
              <span className={styles.statLabel}>ECTS Credits</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>1,8</span>
              <span className={styles.statLabel}>Notendurchschnitt</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>2024</span>
              <span className={styles.statLabel}>Freelancer seit</span>
            </div>
          </div>
        </div>

        {/* Services Preview */}
        <div className={styles.services}>
          <h2 className={styles.servicesTitle}>Was ich gestalte</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🎨</div>
              <h3 className={styles.serviceTitle}>UI/UX Design</h3>
              <p className={styles.serviceDescription}>
                Benutzerfreundliche Interfaces und durchdachte User Experience 
                mit Figma und modernen Design-Prinzipien.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>💻</div>
              <h3 className={styles.serviceTitle}>Webdesign</h3>
              <p className={styles.serviceDescription}>
                Responsive Websites mit HTML, CSS und WordPress, 
                die auf allen Geräten perfekt funktionieren.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>📱</div>
              <h3 className={styles.serviceTitle}>Mobile Design</h3>
              <p className={styles.serviceDescription}>
                Mobile-first Designs und App-Interfaces, die 
                intuitive Bedienung und beste UX bieten.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🎬</div>
              <h3 className={styles.serviceTitle}>Audio-Visuell</h3>
              <p className={styles.serviceDescription}>
                Bild- und Videobearbeitung mit Adobe Creative Suite 
                für beeindruckende visuelle Kommunikation.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Projects Preview */}
        <div className={styles.projects}>
          <h2 className={styles.projectsTitle}>Ausgewählte Projekte</h2>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src="/images/webdesign-project.jpg" alt="Webdesign Projekt" />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>Responsive Webdesign</h3>
                <p className={styles.projectDescription}>
                  Moderne Website mit benutzerfreundlichem Design und optimaler Performance.
                </p>
                <div className={styles.projectTech}>
                  <span className={styles.techTag}>HTML</span>
                  <span className={styles.techTag}>CSS</span>
                  <span className={styles.techTag}>WordPress</span>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src="/images/ux-project.jpg" alt="UX Design Projekt" />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>Mobile App Interface</h3>
                <p className={styles.projectDescription}>
                  User Interface Design für mobile App mit Fokus auf intuitive Bedienung.
                </p>
                <div className={styles.projectTech}>
                  <span className={styles.techTag}>Figma</span>
                  <span className={styles.techTag}>UI/UX</span>
                  <span className={styles.techTag}>Mobile Design</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.projectsCta}>
            <a href="#projects" className={styles.viewAllButton}>
              Alle Projekte ansehen
            </a>
          </div>
        </div>

        {/* Contact CTA */}
        <div className={styles.contactCta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Bereit für Ihr nächstes Design-Projekt?</h2>
            <p className={styles.ctaDescription}>
              Lassen Sie uns gemeinsam Ihre Ideen visuell zum Leben erwecken. 
              Ich freue mich auf Ihre Nachricht!
            </p>
            <a href="#contact" className={styles.contactButton}>
              Projekt besprechen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}