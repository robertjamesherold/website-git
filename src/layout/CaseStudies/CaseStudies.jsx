import { useState } from 'react'
import styles from './_CaseStudies.module.scss'
import { Container } from '@ly/Container/Container'

export function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedStudy, setSelectedStudy] = useState(null)

  const categories = [
    { id: 'all', label: 'Alle Projekte', count: 9 },
    { id: 'webdesign', label: 'Webdesign', count: 4 },
    { id: 'ui-ux', label: 'UI/UX Design', count: 3 },
    { id: 'branding', label: 'Branding', count: 2 }
  ]

  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Platform Redesign',
      client: 'TechStore GmbH',
      category: 'webdesign',
      duration: '3 Monate',
      year: '2024',
      thumbnail: 'https://picsum.photos/800/600?random=1',
      images: [
        'https://picsum.photos/1200/800?random=11',
        'https://picsum.photos/1200/800?random=12',
        'https://picsum.photos/1200/800?random=13'
      ],
      description: 'Komplettes Redesign einer E-Commerce-Plattform mit über 10.000 Produkten. Fokus auf User Experience, Performance-Optimierung und Conversion-Rate.',
      challenge: 'Die bestehende Plattform hatte eine hohe Absprungrate und niedrige Conversion. Die Navigation war unübersichtlich und die mobile Experience mangelhaft.',
      solution: 'Entwicklung eines modernen, responsiven Designs mit verbesserter Navigation, schnelleren Ladezeiten und optimiertem Checkout-Prozess.',
      results: [
        '45% Steigerung der Conversion-Rate',
        '60% weniger Warenkorbabbrüche',
        '30% längere Verweildauer',
        '25% mehr mobile Nutzer'
      ],
      technologies: ['Figma', 'WordPress', 'WooCommerce', 'CSS3', 'JavaScript'],
      testimonial: {
        text: 'Die Zusammenarbeit mit Robert war hervorragend. Er hat unsere Anforderungen perfekt umgesetzt und die Ergebnisse sprechen für sich.',
        author: 'Michael Schmidt',
        position: 'CEO, TechStore GmbH'
      }
    },
    {
      id: 2,
      title: 'Banking App Interface',
      client: 'FinTech Startup',
      category: 'ui-ux',
      duration: '2 Monate',
      year: '2024',
      thumbnail: 'https://picsum.photos/800/600?random=2',
      images: [
        'https://picsum.photos/1200/800?random=21',
        'https://picsum.photos/1200/800?random=22',
        'https://picsum.photos/1200/800?random=23'
      ],
      description: 'Design einer intuitiven Mobile Banking App mit Fokus auf Sicherheit und Benutzerfreundlichkeit für die Generation Z.',
      challenge: 'Komplexe Finanzfunktionen sollten einfach und verständlich dargestellt werden, ohne die Sicherheitsaspekte zu vernachlässigen.',
      solution: 'Klares Interface-Design mit biometrischer Authentifizierung, personalisierten Dashboards und spielerischen Elementen für besseres Engagement.',
      results: [
        '4.8/5 App Store Bewertung',
        '50.000+ Downloads in 3 Monaten',
        '85% tägliche aktive Nutzer',
        '92% Kundenzufriedenheit'
      ],
      technologies: ['Figma', 'Principle', 'Adobe XD', 'Prototyping', 'User Testing'],
      testimonial: {
        text: 'Roberts Design hat unsere Vision perfekt eingefangen. Die App ist nicht nur schön, sondern auch extrem benutzerfreundlich.',
        author: 'Sarah Weber',
        position: 'Product Manager, FinTech Startup'
      }
    },
    {
      id: 3,
      title: 'Restaurant Brand Identity',
      client: 'Gourmet Küche Frankfurt',
      category: 'branding',
      duration: '6 Wochen',
      year: '2023',
      thumbnail: 'https://picsum.photos/800/600?random=3',
      images: [
        'https://picsum.photos/1200/800?random=31',
        'https://picsum.photos/1200/800?random=32',
        'https://picsum.photos/1200/800?random=33'
      ],
      description: 'Entwicklung einer kompletten Markenidentität für ein gehobenes Restaurant, inklusive Logo, Farbschema und Marketingmaterialien.',
      challenge: 'Das Restaurant wollte Tradition und Moderne verbinden und sich als Premium-Marke positionieren, ohne abgehoben zu wirken.',
      solution: 'Elegantes Logo-Design mit handgeschriebenen Elementen, warme Farbpalette und hochwertige Druckmaterialien.',
      results: [
        '30% mehr Reservierungen',
        'Erfolgreiche Positionierung im Premium-Segment',
        'Positive Medienberichterstattung',
        'Steigerung der Social Media Präsenz'
      ],
      technologies: ['Illustrator', 'Photoshop', 'InDesign', 'Brand Strategy'],
      testimonial: {
        text: 'Das neue Branding hat unserem Restaurant zu einer ganz neuen Identität verholfen. Unsere Gäste lieben den neuen Look!',
        author: 'Thomas Müller',
        position: 'Inhaber, Gourmet Küche Frankfurt'
      }
    },
    {
      id: 4,
      title: 'SaaS Dashboard Redesign',
      client: 'DataTech Solutions',
      category: 'ui-ux',
      duration: '2.5 Monate',
      year: '2024',
      thumbnail: 'https://picsum.photos/800/600?random=4',
      images: [
        'https://picsum.photos/1200/800?random=41',
        'https://picsum.photos/1200/800?random=42',
        'https://picsum.photos/1200/800?random=43'
      ],
      description: 'Neugestaltung eines komplexen Analytics-Dashboards für bessere Datenvisualisierung und User Experience.',
      challenge: 'Das bestehende Dashboard war überladen und unübersichtlich. Nutzer hatten Schwierigkeiten, relevante Informationen schnell zu finden.',
      solution: 'Modulares Dashboard-Design mit anpassbaren Widgets, klarer Informationshierarchie und interaktiven Datenvisualisierungen.',
      results: [
        '70% schnellere Task-Completion',
        '40% weniger Support-Anfragen',
        'Erhöhte Nutzerzufriedenheit',
        '25% mehr aktive Nutzer'
      ],
      technologies: ['Figma', 'React', 'D3.js', 'User Research', 'A/B Testing'],
      testimonial: {
        text: 'Das neue Dashboard hat die Art und Weise revolutioniert, wie unsere Kunden mit Daten arbeiten. Ein echter Game-Changer!',
        author: 'Lisa Chen',
        position: 'CPO, DataTech Solutions'
      }
    },
    {
      id: 5,
      title: 'Fashion E-Commerce Website',
      client: 'Urban Style Boutique',
      category: 'webdesign',
      duration: '2 Monate',
      year: '2023',
      thumbnail: 'https://picsum.photos/800/600?random=5',
      images: [
        'https://picsum.photos/1200/800?random=51',
        'https://picsum.photos/1200/800?random=52',
        'https://picsum.photos/1200/800?random=53'
      ],
      description: 'Entwicklung einer stilvollen E-Commerce-Website für eine Modeboutique mit Fokus auf visuelle Präsentation.',
      challenge: 'Die Boutique benötigte eine Online-Präsenz, die ihre einzigartige Ästhetik widerspiegelt und gleichzeitig funktional ist.',
      solution: 'Minimalistisches Design mit großflächigen Produktbildern, elegantem Typography und nahtloser Shopping-Experience.',
      results: [
        '200% Umsatzsteigerung online',
        'Internationale Reichweite',
        '35% Wiederkäufer-Rate',
        'Social Media Integration erfolgreich'
      ],
      technologies: ['WordPress', 'WooCommerce', 'HTML5', 'CSS3', 'jQuery'],
      testimonial: {
        text: 'Unsere neue Website ist genau das, was wir uns vorgestellt haben. Elegant, funktional und unsere Kunden lieben sie!',
        author: 'Julia Klein',
        position: 'Gründerin, Urban Style Boutique'
      }
    },
    {
      id: 6,
      title: 'Fitness App UI Design',
      client: 'FitLife Pro',
      category: 'ui-ux',
      duration: '1.5 Monate',
      year: '2024',
      thumbnail: 'https://picsum.photos/800/600?random=6',
      images: [
        'https://picsum.photos/1200/800?random=61',
        'https://picsum.photos/1200/800?random=62',
        'https://picsum.photos/1200/800?random=63'
      ],
      description: 'User Interface Design für eine Fitness-Tracking-App mit personalisierten Trainingsplänen und Social Features.',
      challenge: 'Die App sollte Anfänger motivieren und gleichzeitig Profis alle nötigen Features bieten.',
      solution: 'Gamification-Elemente, personalisierte Dashboards und eine aktive Community-Integration.',
      results: [
        '4.9/5 Sterne Bewertung',
        '100k+ aktive Nutzer',
        '80% Retention Rate',
        'Featured im App Store'
      ],
      technologies: ['Figma', 'Principle', 'User Testing', 'Motion Design'],
      testimonial: {
        text: 'Das Design hat unsere App auf ein neues Level gehoben. Die Nutzer sind begeistert von der Bedienbarkeit!',
        author: 'Mark Johnson',
        position: 'CEO, FitLife Pro'
      }
    },
    {
      id: 7,
      title: 'Corporate Website Refresh',
      client: 'Innovation Consulting',
      category: 'webdesign',
      duration: '1 Monat',
      year: '2023',
      thumbnail: 'https://picsum.photos/800/600?random=7',
      images: [
        'https://picsum.photos/1200/800?random=71',
        'https://picsum.photos/1200/800?random=72',
        'https://picsum.photos/1200/800?random=73'
      ],
      description: 'Modernisierung einer Unternehmenswebsite für bessere Lead-Generierung und professionelleren Auftritt.',
      challenge: 'Die alte Website wirkte veraltet und generierte kaum Leads. Mobile Optimierung fehlte komplett.',
      solution: 'Frisches, professionelles Design mit klaren Call-to-Actions, Kontaktformularen und responsivem Layout.',
      results: [
        '150% mehr Anfragen',
        'Verbesserte SEO-Rankings',
        '50% niedrigere Bounce-Rate',
        'Professionelleres Image'
      ],
      technologies: ['WordPress', 'Elementor', 'SEO', 'Google Analytics'],
      testimonial: {
        text: 'Die neue Website hat unsere Online-Präsenz transformiert. Wir erhalten deutlich mehr qualifizierte Anfragen.',
        author: 'Peter Wagner',
        position: 'Managing Director, Innovation Consulting'
      }
    },
    {
      id: 8,
      title: 'Event Agency Branding',
      client: 'Spektrum Events',
      category: 'branding',
      duration: '1.5 Monate',
      year: '2024',
      thumbnail: 'https://picsum.photos/800/600?random=8',
      images: [
        'https://picsum.photos/1200/800?random=81',
        'https://picsum.photos/1200/800?random=82',
        'https://picsum.photos/1200/800?random=83'
      ],
      description: 'Kreative Markenidentität für eine Event-Agentur, die Energie und Professionalität vermittelt.',
      challenge: 'Die Agentur brauchte ein Branding, das sowohl corporate als auch kreativ wirkt.',
      solution: 'Dynamisches Logo mit flexiblem Farbsystem, das sich an verschiedene Event-Typen anpasst.',
      results: [
        'Starke Markenwahrnehmung',
        '40% mehr Großkunden',
        'Erfolgreiche Differenzierung',
        'Award für bestes Branding'
      ],
      technologies: ['Illustrator', 'After Effects', 'Brand Guidelines', 'Motion Graphics'],
      testimonial: {
        text: 'Unser neues Branding öffnet Türen. Kunden nehmen uns viel professioneller wahr.',
        author: 'Anna Berger',
        position: 'Creative Director, Spektrum Events'
      }
    },
    {
      id: 9,
      title: 'Real Estate Platform',
      client: 'ImmoDigital',
      category: 'webdesign',
      duration: '3.5 Monate',
      year: '2024',
      thumbnail: 'https://picsum.photos/800/600?random=9',
      images: [
        'https://picsum.photos/1200/800?random=91',
        'https://picsum.photos/1200/800?random=92',
        'https://picsum.photos/1200/800?random=93'
      ],
      description: 'Entwicklung einer innovativen Immobilienplattform mit virtuellen Rundgängen und KI-gestützter Suche.',
      challenge: 'Der Immobilienmarkt ist übersättigt mit ähnlichen Plattformen. Differenzierung war essentiell.',
      solution: '360°-Touren, intelligente Suchfilter und personalisierte Empfehlungen basierend auf Nutzerverhalten.',
      results: [
        '10.000+ Listings im ersten Jahr',
        '300% ROI',
        'Marktführer in der Region',
        '95% positive Nutzerbewertungen'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Three.js', 'AI Integration'],
      testimonial: {
        text: 'Die Plattform hat unsere Erwartungen übertroffen. Die Innovation zeigt sich in jedem Detail.',
        author: 'Robert Lange',
        position: 'Founder, ImmoDigital'
      }
    }
  ]

  const filteredStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter)

  const openStudyModal = (study) => {
    setSelectedStudy(study)
    document.body.style.overflow = 'hidden'
  }

  const closeStudyModal = () => {
    setSelectedStudy(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <section id="case-studies" className={styles.caseStudies}>
      <Container>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Case Studies</h1>
          <p className={styles.subtitle}>
            Detaillierte Einblicke in ausgewählte Projekte. Erfahren Sie mehr über 
            Herausforderungen, Lösungsansätze und erzielte Ergebnisse.
          </p>
        </div>

        {/* Filter */}
        <div className={styles.filterSection}>
          <div className={styles.filterButtons}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${styles.filterButton} ${
                  activeFilter === category.id ? styles.active : ''
                }`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
                <span className={styles.filterCount}>{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className={styles.studiesGrid}>
          {filteredStudies.map((study, index) => (
            <article 
              key={study.id} 
              className={styles.studyCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.studyImage}>
                <img src={study.thumbnail} alt={study.title} />
                <div className={styles.studyOverlay}>
                  <button 
                    className={styles.viewButton}
                    onClick={() => openStudyModal(study)}
                  >
                    Case Study ansehen
                  </button>
                </div>
              </div>
              
              <div className={styles.studyContent}>
                <div className={styles.studyMeta}>
                  <span className={styles.studyCategory}>
                    {categories.find(cat => cat.id === study.category)?.label}
                  </span>
                  <span className={styles.studyYear}>{study.year}</span>
                </div>
                
                <h3 className={styles.studyTitle}>{study.title}</h3>
                <p className={styles.studyClient}>{study.client}</p>
                <p className={styles.studyDescription}>{study.description}</p>
                
                <div className={styles.studyTech}>
                  {study.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className={styles.techTag}>{tech}</span>
                  ))}
                  {study.technologies.length > 3 && (
                    <span className={styles.techMore}>+{study.technologies.length - 3}</span>
                  )}
                </div>
                
                <div className={styles.studyStats}>
                  <div className={styles.statItem}>
                    <span className={styles.statIcon}>⏱️</span>
                    <span className={styles.statText}>{study.duration}</span>
                  </div>
                  <button 
                    className={styles.studyLink}
                    onClick={() => openStudyModal(study)}
                  >
                    Details ansehen
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Stats Section */}
        <div className={styles.statsSection}>
          <h2 className={styles.statsTitle}>Projekt-Erfolge in Zahlen</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Abgeschlossene Projekte</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>95%</span>
              <span className={styles.statLabel}>Zufriedene Kunden</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>2.5M€</span>
              <span className={styles.statLabel}>Generierter Umsatz für Kunden</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>15</span>
              <span className={styles.statLabel}>Design Awards</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ihr Projekt könnte das nächste sein</h2>
          <p className={styles.ctaDescription}>
            Lassen Sie uns gemeinsam an Ihrem Erfolg arbeiten. Ich freue mich darauf, 
            Ihre Vision in die Realität umzusetzen.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/kontakt" className={styles.ctaButton}>
              Projekt starten
            </a>
            <a href="/projekte" className={styles.ctaButtonSecondary}>
              Alle Projekte ansehen
            </a>
          </div>
        </div>
      </Container>

      {/* Modal for detailed view */}
      {selectedStudy && (
        <div className={styles.modal} onClick={closeStudyModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeStudyModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{selectedStudy.title}</h2>
              <p className={styles.modalClient}>{selectedStudy.client}</p>
            </div>

            <div className={styles.modalImages}>
              {selectedStudy.images.map((image, index) => (
                <img key={index} src={image} alt={`${selectedStudy.title} - Bild ${index + 1}`} />
              ))}
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalSection}>
                <h3>Die Herausforderung</h3>
                <p>{selectedStudy.challenge}</p>
              </div>

              <div className={styles.modalSection}>
                <h3>Die Lösung</h3>
                <p>{selectedStudy.solution}</p>
              </div>

              <div className={styles.modalSection}>
                <h3>Die Ergebnisse</h3>
                <ul className={styles.resultsList}>
                  {selectedStudy.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.modalSection}>
                <h3>Eingesetzte Technologien</h3>
                <div className={styles.modalTech}>
                  {selectedStudy.technologies.map((tech, index) => (
                    <span key={index} className={styles.modalTechTag}>{tech}</span>
                  ))}
                </div>
              </div>

              {selectedStudy.testimonial && (
                <div className={styles.testimonial}>
                  <blockquote>
                    <p>"{selectedStudy.testimonial.text}"</p>
                    <footer>
                      <strong>{selectedStudy.testimonial.author}</strong>
                      <span>{selectedStudy.testimonial.position}</span>
                    </footer>
                  </blockquote>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}