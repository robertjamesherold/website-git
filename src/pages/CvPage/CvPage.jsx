import styles from './_CV.module.scss'
import Me from '@img/me.png'


export function CvPage() {
  return (
    <section id="cv" className={styles.cv}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>Lebenslauf</h1>
            <p className={styles.subtitle}>
              Robert James Herold - Mediendesigner & UI/UX Designer
            </p>
          </div>
          <div className={styles.headerActions}>
            <a href="/cv-robert-james-herold.pdf" className={styles.downloadButton} download>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
              CV herunterladen
            </a>
          </div>
        </div>

        {/* Personal Info */}
        <div className={styles.personalInfo}>
          <div className={styles.profileImage}>
            <img src={Me} alt="Robert James Herold" />
          </div>
          <div className={styles.contactInfo}>
            <h2 className={styles.sectionTitle}>Kontakt</h2>
            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <div>
                  <strong>Adresse</strong>
                  <p>Im Kammerfest 23<br/>63628 Bad Soden-Salmünster</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <div>
                  <strong>E-Mail</strong>
                  <p>robertjamesherold@icloud.com</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📱</span>
                <div>
                  <strong>Telefon</strong>
                  <p>+49 151 616 60 444</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>🌐</span>
                <div>
                  <strong>Portfolio</strong>
                  <p>robertjamesherold.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className={styles.mainContent}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {/* Education */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Ausbildung</h2>
              <div className={styles.timelineList}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelinePeriod}>2022 - 2025</div>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTitle}>Bachelor of Arts Mediendesign</h3>
                    <p className={styles.timelineInstitution}>IU Internationale Hochschule, Erfurt</p>
                    <p className={styles.timelineDescription}>
                      Schwerpunkte: UI/UX Design, Webdesign, Digitale Medienformate
                    </p>
                    <div className={styles.timelineMetrics}>
                      <span className={styles.metric}>135/180 ECTS</span>
                      <span className={styles.metric}>∅ 1,8</span>
                    </div>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelinePeriod}>2015 - 2017</div>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTitle}>Fachhochschulreife</h3>
                    <p className={styles.timelineInstitution}>Gutenbergschule, Frankfurt am Main</p>
                    <p className={styles.timelineDescription}>
                      Fachrichtung: Gestaltung
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Berufserfahrung</h2>
              <div className={styles.timelineList}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelinePeriod}>2024 - heute</div>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTitle}>Webdesigner & UI/UX Designer</h3>
                    <p className={styles.timelineInstitution}>Freelancer - Remote/Homeoffice</p>
                    <ul className={styles.taskList}>
                      <li>Konzeption und Gestaltung von Websites und Web-Anwendungen</li>
                      <li>User Interface und User Experience Design</li>
                      <li>Responsive Design für alle Endgeräte</li>
                      <li>Zusammenarbeit mit Entwicklern und Kunden</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelinePeriod}>2020 - 2022</div>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTitle}>Verkäufer im Einzelhandel</h3>
                    <p className={styles.timelineInstitution}>Blume 2000, Fulda</p>
                    <ul className={styles.taskList}>
                      <li>Kundenberatung und Verkauf</li>
                      <li>Warenpräsentation und Visual Merchandising</li>
                      <li>Teamarbeit und Kundenservice</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelinePeriod}>2015 - 2016</div>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTitle}>Praktikum Mediengestalter</h3>
                    <p className={styles.timelineInstitution}>sixeyesmedia GmbH, Schlüchtern</p>
                    <ul className={styles.taskList}>
                      <li>Erste Einblicke in die Medienbranche</li>
                      <li>Unterstützung bei Gestaltungsprojekten</li>
                      <li>Erlernen professioneller Design-Software</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Activities */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Zusätzliche Aktivitäten</h2>
              <div className={styles.timelineList}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelinePeriod}>01/2025 - 06/2025</div>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTitle}>Studierendenvertreter</h3>
                    <p className={styles.timelineInstitution}>IU Internationale Hochschule - Mediendesign</p>
                    <ul className={styles.taskList}>
                      <li>Vertretung der Studierenden im Studiengang</li>
                      <li>Kommunikation zwischen Hochschule und Studierenden</li>
                      <li>Einbringung von Verbesserungsvorschlägen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            {/* Skills */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Kompetenzen</h2>
              
              <div className={styles.skillCategory}>
                <h3 className={styles.skillCategoryTitle}>Design Software</h3>
                <div className={styles.skillGrid}>
                  <div className={styles.skillItem}>
                    <span className={styles.skillName}>Figma</span>
                    <div className={styles.skillLevel}>
                      <div className={styles.skillBar} data-level="95"></div>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <span className={styles.skillName}>Photoshop</span>
                    <div className={styles.skillLevel}>
                      <div className={styles.skillBar} data-level="90"></div>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <span className={styles.skillName}>Illustrator</span>
                    <div className={styles.skillLevel}>
                      <div className={styles.skillBar} data-level="85"></div>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <span className={styles.skillName}>InDesign</span>
                    <div className={styles.skillLevel}>
                      <div className={styles.skillBar} data-level="80"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.skillCategory}>
                <h3 className={styles.skillCategoryTitle}>Web Technologien</h3>
                <div className={styles.skillGrid}>
                  <div className={styles.skillItem}>
                    <span className={styles.skillName}>HTML</span>
                    <div className={styles.skillLevel}>
                      <div className={styles.skillBar} data-level="90"></div>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <span className={styles.skillName}>CSS</span>
                    <div className={styles.skillLevel}>
                      <div className={styles.skillBar} data-level="85"></div>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <span className={styles.skillName}>WordPress</span>
                    <div className={styles.skillLevel}>
                      <div className={styles.skillBar} data-level="80"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.skillCategory}>
                <h3 className={styles.skillCategoryTitle}>Video & Audio</h3>
                <div className={styles.skillGrid}>
                  <div className={styles.skillItem}>
                    <span className={styles.skillName}>After Effects</span>
                    <div className={styles.skillLevel}>
                      <div className={styles.skillBar} data-level="75"></div>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <span className={styles.skillName}>Premiere Pro</span>
                    <div className={styles.skillLevel}>
                      <div className={styles.skillBar} data-level="70"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Highlights */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Studienleistungen</h2>
              <div className={styles.achievementsList}>
                <div className={styles.achievement}>
                  <h4>Beste Noten in Kernfächern</h4>
                  <ul>
                    <li>Projekt: Cross-Media Design (1,0)</li>
                    <li>Projekt: Grafikdesign (1,0)</li>
                    <li>Gestaltung interaktiver Medien (1,0)</li>
                    <li>Bild- und Videobearbeitung (1,0)</li>
                  </ul>
                </div>
                <div className={styles.achievement}>
                  <h4>Schwerpunkte</h4>
                  <ul>
                    <li>User Experience Design</li>
                    <li>Mobile Media Design</li>
                    <li>Webdesign & UI Design</li>
                    <li>Audio-visuelle Medien</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Sprachen</h2>
              <div className={styles.languageList}>
                <div className={styles.languageItem}>
                  <span className={styles.language}>Deutsch</span>
                  <span className={styles.languageLevel}>Muttersprache</span>
                </div>
                <div className={styles.languageItem}>
                  <span className={styles.language}>Englisch</span>
                  <span className={styles.languageLevel}>Verhandlungssicher</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Interessiert an einem gemeinsamen Projekt?</h2>
          <p className={styles.ctaDescription}>
            Ich freue mich darauf, neue Projekte und Herausforderungen anzunehmen. 
            Lassen Sie uns über Ihre Ideen sprechen!
          </p>
          <div className={styles.ctaButtons}>
            <a href="#contact" className={styles.ctaButton}>
              Kontakt aufnehmen
            </a>
            <a href="mailto:robertjamesherold@icloud.com" className={styles.ctaButtonSecondary}>
              E-Mail schreiben
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}