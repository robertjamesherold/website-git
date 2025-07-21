import styles from './_Contact.module.scss'
import { ContactForm } from '@cm/form/ContactForm/ContactForm'
import { Container } from '@ly/Container/Container'

export function ContactPage() {
  const contactInfo = [
    {
      icon: '📍',
      title: 'Adresse',
      content: ['Im Kammerfest 23', '63628 Bad Soden-Salmünster'],
      link: null
    },
    {
      icon: '📧',
      title: 'E-Mail',
      content: ['robertjamesherold@icloud.com'],
      link: 'mailto:robertjamesherold@icloud.com'
    },
    {
      icon: '📱',
      title: 'Telefon',
      content: ['+49 151 616 60 444'],
      link: 'tel:+4915161660444'
    },
    {
      icon: '🌐',
      title: 'Portfolio',
      content: ['robertjamesherold.com'],
      link: 'https://robertjamesherold.com'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: 'https://github.com/robertjamesherold'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: 'https://linkedin.com/in/robertjamesherold'
    }
  ]

  return (
    <section id="contact" className={styles.contact}>
      <Container>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Kontakt</h1>
          <p className={styles.subtitle}>
            Haben Sie ein spannendes Projekt im Kopf? Lassen Sie uns darüber sprechen! 
            Ich freue mich auf Ihre Nachricht.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={styles.mainGrid}>
          {/* Contact Form Section */}
          <div className={styles.formSection}>
            <div className={styles.formWrapper}>
              <ContactForm 
                formTitle="Nachricht senden"
              />
            </div>
          </div>

          {/* Contact Info Section */}
          <div className={styles.infoSection}>
            {/* Quick Contact */}
            <div className={styles.quickContact}>
              <h2 className={styles.infoTitle}>Direkter Kontakt</h2>
              <p className={styles.infoDescription}>
                Sie bevorzugen den direkten Weg? Hier finden Sie alle Möglichkeiten, 
                um mit mir in Kontakt zu treten.
              </p>
              
              <div className={styles.contactCards}>
                {contactInfo.map((info, index) => (
                  <div key={index} className={styles.contactCard}>
                    <div className={styles.cardIcon}>{info.icon}</div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className={styles.cardLink}>
                          {info.content.map((line, i) => (
                            <span key={i}>{line}</span>
                          ))}
                        </a>
                      ) : (
                        <div className={styles.cardText}>
                          {info.content.map((line, i) => (
                            <span key={i}>{line}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className={styles.responseTime}>
              <div className={styles.responseIcon}>⏱️</div>
              <div className={styles.responseContent}>
                <h3 className={styles.responseTitle}>Schnelle Antwort</h3>
                <p className={styles.responseText}>
                  Ich antworte normalerweise innerhalb von 24 Stunden auf alle Anfragen.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className={styles.socialSection}>
              <h3 className={styles.socialTitle}>Folgen Sie mir</h3>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Map or Additional Info */}
            <div className={styles.additionalInfo}>
              <h3 className={styles.additionalTitle}>Verfügbarkeit</h3>
              <p className={styles.additionalText}>
                Ich bin offen für Freelance-Projekte, Zusammenarbeit und neue 
                Herausforderungen. Remote-Arbeit ist kein Problem – ich arbeite 
                gerne mit Kunden aus ganz Deutschland und darüber hinaus.
              </p>
              <div className={styles.availability}>
                <span className={styles.availableStatus}>
                  <span className={styles.statusDot}></span>
                  Verfügbar für neue Projekte
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={styles.faqSection}>
          <h2 className={styles.faqTitle}>Häufige Fragen</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Wie läuft ein Projekt ab?</h3>
              <p className={styles.faqAnswer}>
                Nach Ihrer Anfrage besprechen wir Ihre Anforderungen, ich erstelle 
                ein Angebot und nach Freigabe starten wir mit dem Design-Prozess.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Welche Projekte nehmen Sie an?</h3>
              <p className={styles.faqAnswer}>
                Ich arbeite an Webdesign, UI/UX Design, Branding und digitalen 
                Medienformaten – von kleinen bis zu großen Projekten.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Wie lange dauert ein Projekt?</h3>
              <p className={styles.faqAnswer}>
                Die Dauer hängt vom Umfang ab. Ein einfaches Design dauert etwa 
                1-2 Wochen, komplexere Projekte entsprechend länger.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Bieten Sie auch Wartung an?</h3>
              <p className={styles.faqAnswer}>
                Ja, ich biete auch langfristige Betreuung und Wartung für 
                bestehende Projekte an.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}